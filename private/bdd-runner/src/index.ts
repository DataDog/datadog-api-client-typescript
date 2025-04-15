#!/usr/bin/env node

import { Command } from "commander";
import Cli from "@cucumber/cucumber/lib/cli/index";

import path from "path";

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

cli.run();
