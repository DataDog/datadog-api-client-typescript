#!/usr/bin/env node

import { Command } from "commander";
import {
  ImportDeclarationStructure,
  Project,
  SourceFile,
  StructureKind,
  SyntaxKind,
  VariableDeclarationKind,
} from "ts-morph";
import Cli from "@cucumber/cucumber/lib/cli/index";

import path from "path";
import fs from "fs";

const apiExportRegex = /(\S+)ApiV\d+/g;

function isDirectory(path: string): boolean {
  return fs.statSync(path).isDirectory();
}

function isFile(path: string): boolean {
  return fs.statSync(path).isFile();
}

function buildImportsAndMappings(servicesDir: string): {
  imports: ImportDeclarationStructure[];
  apiNameToServiceNameMapping: Record<string, string>;
  apiNameToTypingInfoMapping: Record<string, string>;
} {
  const imports: ImportDeclarationStructure[] = [];
  const apiNameToServiceNameMapping: Record<string, string> = {};
  const apiNameToTypingInfoMapping: Record<string, string> = {};

  fs.readdirSync(servicesDir).forEach((service) => {
    const servicePath = path.join(servicesDir, service);
    const packageJson = path.join(servicePath, "src", "index.ts");
    if (isDirectory(servicePath) && isFile(packageJson)) {
      // Load the source file. We don't use ast parser because its too slow.
      const file = fs.readFileSync(packageJson, "utf8");
      // Parse the regex matching the Api export format. For example: UsageMeteringApiV2
      const apiMatches = file.match(apiExportRegex);
      if (apiMatches) {
        imports.push({
          kind: StructureKind.ImportDeclaration,
          namedImports: apiMatches,
          moduleSpecifier: `@datadog/datadog-api-client-${service.replace(/_/g, "-")}`,
        });

        for (const apiMatch of apiMatches) {
          // Extract version number (e.g. "V2" from "UsageMeteringApiV2")
          const version = apiMatch.match(/V([0-9]+)/)?.[1];
          if (!version) {
            throw new Error(`Failed to extract version from ${apiMatch}`);
          }
          imports.push({
            kind: StructureKind.ImportDeclaration,
            namedImports: ["TypingInfo as " + apiMatch + "TypingInfo"],
            moduleSpecifier: `@datadog/datadog-api-client-${service.replace(/_/g, "-")}/dist/v${version}/models/TypingInfo`,
          });

          apiNameToTypingInfoMapping[apiMatch] = apiMatch + "TypingInfo";
        }

        // Remove the Version from the Api name
        const apiName = apiMatches[0].replace(/ApiV\d+/, "Api");
        apiNameToServiceNameMapping[apiName] = service;
      }
    }
  });

  return { imports, apiNameToServiceNameMapping, apiNameToTypingInfoMapping };
}

function populateApiTypes(
  sourceFile: SourceFile,
  apiNameToServiceNameMapping: Record<string, string>,
  apiNameToTypingInfoMapping: Record<string, string>,
) {
  sourceFile.addVariableStatements([
    {
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "apiTypes",
          initializer: "{}",
          type: "Record<string, any>",
        },
      ],
      isExported: true,
    },
    {
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "apiNameToServiceNameMapping",
          initializer: "{}",
          type: "Record<string, string>",
        },
      ],
      isExported: true,
    },
    {
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "apiNameToTypingInfoMapping",
          initializer: "{}",
          type: "Record<string, any>",
        },
      ],
      isExported: true,
    },
  ]);

  // Populate apiTypes map
  const apiTypes = sourceFile.getVariableDeclarationOrThrow("apiTypes");
  const apiTypesInitializer = apiTypes.getInitializerIfKindOrThrow(
    SyntaxKind.ObjectLiteralExpression,
  );
  const imports = sourceFile.getImportDeclarations();
  for (const importDecl of imports) {
    for (const namedImport of importDecl.getNamedImports()) {
      if (namedImport.getName().includes("TypingInfo")) {
        continue;
      }
      apiTypesInitializer.addPropertyAssignment({
        name: namedImport.getName(),
        initializer: namedImport.getName(),
      });
    }
  }

  // Populate apiNameToServiceNameMapping map
  const apiNameToServiceName = sourceFile.getVariableDeclarationOrThrow(
    "apiNameToServiceNameMapping",
  );
  const apiNameToServiceNameInitializer =
    apiNameToServiceName.getInitializerIfKindOrThrow(
      SyntaxKind.ObjectLiteralExpression,
    );

  for (const [apiName, serviceName] of Object.entries(
    apiNameToServiceNameMapping,
  )) {
    apiNameToServiceNameInitializer.addPropertyAssignment({
      name: apiName,
      initializer: `"${serviceName}"`,
    });
  }

  // Populate apiNameToTypingInfoMapping map
  const apiNameToTypingInfo = sourceFile.getVariableDeclarationOrThrow(
    "apiNameToTypingInfoMapping",
  );
  const apiNameToTypingInfoInitializer =
    apiNameToTypingInfo.getInitializerIfKindOrThrow(
      SyntaxKind.ObjectLiteralExpression,
    );

  for (const [apiName, typingInfo] of Object.entries(
    apiNameToTypingInfoMapping,
  )) {
    apiNameToTypingInfoInitializer.addPropertyAssignment({
      name: apiName,
      initializer: `${typingInfo}`,
    });
  }
}

function generateApiInfo(servicesDir: string) {
  const project = new Project({
    skipAddingFilesFromTsConfig: true,
  });
  project.createSourceFile("src/support/api_info.ts", "", { overwrite: true });

  let sourceFile = project.getSourceFileOrThrow("src/support/api_info.ts");

  const { imports, apiNameToServiceNameMapping, apiNameToTypingInfoMapping } =
    buildImportsAndMappings(servicesDir);
  sourceFile.addImportDeclarations(imports);

  // Populate apiTypes map
  populateApiTypes(
    sourceFile,
    apiNameToServiceNameMapping,
    apiNameToTypingInfoMapping,
  );

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
    .option(
      "--services-dir <path>",
      "Fully qualified path to services directory",
    )
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
    // require("dd-trace/init");
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
  cli.run();
}

main();
