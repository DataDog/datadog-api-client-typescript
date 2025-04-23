#!/usr/bin/env node

import { Command } from "commander";
import { ImportDeclarationStructure, ObjectLiteralExpression, Project, SourceFile, StructureKind, SyntaxKind, VariableDeclarationKind } from "ts-morph";
import Cli from "@cucumber/cucumber/lib/cli/index";

import path from "path";
import fs from "fs";

import * as templating from "./support/templating";

function isDirectory(path: string): boolean {
  return fs.statSync(path).isDirectory();
}

function buildImports(servicesDir: string): ImportDeclarationStructure[] {
  var versionRegex = new RegExp("^v[0-9]+$");
  const imports: ImportDeclarationStructure[] = [];

  fs.readdirSync(servicesDir).forEach((service) => {
    const servicePath = path.join(servicesDir, service);
    if (isDirectory(servicePath)) {
      const namedImports: string[] = [];
      fs.readdirSync(path.join(servicePath, "src")).forEach((version) => {
        const versionPath = path.join(servicePath, "src", version);
        if (isDirectory(versionPath) && versionRegex.test(version)) {
          const apiClassName = templating.tagToApiClassName(service) + version.toUpperCase();
          namedImports.push(apiClassName);
        }
      });
      if (namedImports.length > 0) {
        imports.push({
          namedImports: namedImports,
          moduleSpecifier: `@datadog/datadog-api-client-${service.replace(/_/g, '-')}`,
          kind: StructureKind.ImportDeclaration
        });
      }
    }
  });

  return imports;
}
function populateApiTypes(sourceFile: SourceFile, imports: ImportDeclarationStructure[]) {
    // Populate apiTypes map
    if (!sourceFile.getVariableDeclaration("apiTypes")) {
      sourceFile.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: "apiTypes",
            initializer: "{}",
            type: "Record<string, Any>",
          }
        ],
        isExported: true,
      });
    }

  const apiTypes = sourceFile.getVariableDeclarationOrThrow("apiTypes");
  const initializer = apiTypes.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

  imports.forEach((importDecl) => {
    if (Array.isArray(importDecl.namedImports)) {
      importDecl.namedImports.forEach((namedImport) => {
        if (typeof namedImport === 'string') {
          initializer.addPropertyAssignment({
            name: namedImport,
            initializer: namedImport,
          });
        } 
      });
    }
  });
}

function generateApiInfo(servicesDir: string) {
  const project = new Project({
    skipAddingFilesFromTsConfig: true,
  });
  project.addSourceFilesAtPaths("src/support/**/*.ts");
  
  let sourceFile = project.getSourceFile("src/support/api_info.ts");
  if (!sourceFile) {
    sourceFile = project.createSourceFile("src/support/api_info.ts");
  }

  const imports = buildImports(servicesDir);
  sourceFile.addImportDeclarations(imports);

  // Populate apiTypes map
  populateApiTypes(sourceFile, imports);

  sourceFile.saveSync();
}

function main() {
  let cwd = process.cwd();
  const program = new Command();
  program
    .name("bdd-runner")
    .description("A BDD test runner with Datadog integration")
    .option(
      "--working-dir <path>",
      "Fully qualified path to working directory",
      cwd,
    )
    .option(
      "--cassettes-dir <path>",
      "Fully qualified path to cassettes directory",
    )
    .option("--services-dir <path>", "Fully qualified path to services directory")
    .option(
      "--package-prefix <prefix>",
      "Prefix to add to the package name",
      "@datadog/datadog-api-client",
    )
    .option(
      "--additional-givens <additionalGivens>",
      "Additional given files to be added to cucumber. The value is mapping of version to the given file.",
    )
    .argument("<feature>", "Fully qualified path to feature files")
    .parse(process.argv);

  const options = program.opts();

  // Initialize Datadog tracing if enabled and host is set
  if (process.env.DD_AGENT_HOST != undefined) {
    require("dd-trace/ci/init");
  }

  if (options.workingDir) {
    cwd = options.workingDir;
  }
  let worldParameters = {};
  worldParameters["workingDir"] = cwd;
  worldParameters["cassettesDir"] =
    options.cassettesDir || path.resolve(cwd, "cassettes");
  worldParameters["packagePrefix"] = options.packagePrefix;
  worldParameters["servicesDir"] =
    options.servicesDir || path.resolve(cwd, "services");

  let args = program.args;
  args.unshift("--world-parameters", JSON.stringify(worldParameters));
  args.unshift("--require", process.cwd() + "/src/**/*.ts");
  args.unshift(
    "--format",
    process.env.CI || !process.stdout.isTTY ? "progress" : "progress-bar",
  );
  args.unshift("--format", "rerun:@rerun.txt");

  // Handle additional givens and undo actions
  // These are special and need to be loaded in seperately outside of the
  // World constructor so we cannot rely on passing them in the worldParameters.
  const additionalGivens =
    options.additionalGivens ||
    JSON.stringify({
      v1: path.resolve(cwd, "features/v1/given.json"),
      v2: path.resolve(cwd, "features/v2/given.json"),
    });

  const undoActions = JSON.stringify({
    v1: path.resolve(cwd, "features/v1/undo.json"),
    v2: path.resolve(cwd, "features/v2/undo.json"),
  });

  if (additionalGivens.length > 0) {
    process.env.BDD_RUNNER_ADDITIONAL_GIVENS = additionalGivens;
  }

  if (undoActions.length > 0) {
    process.env.BDD_RUNNER_UNDO_ACTIONS = undoActions;
  }

  // Run Cucumber
  const cli = new Cli({
    argv: args,
    cwd: cwd,
    stdout: process.stdout,
    stderr: process.stderr,
    env: process.env,
  });

  // Generate API info
  generateApiInfo(worldParameters["servicesDir"]);

  // Run Cucumber
  // cli.run();
};

main();
