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

// Run Cucumber
const cli = new Cli({
  argv: args,
  cwd: cwd,
  stdout: process.stdout,
  stderr: process.stderr,
  env: process.env,
});

cli.run();
