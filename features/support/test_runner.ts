import fs from "fs";
import path from "path";
import { ChildProcess, spawn } from "child_process";
import { closeSync, openSync } from "fs";
import { fetch as crossFetch } from "cross-fetch";
import { AfterAll, BeforeAll } from "@cucumber/cucumber";

import { pathLookup } from "./templating";
import { World } from "./world";

const CONTROL_ROOT = "/__openapi_transformer__";
const TEMPLATE_KEY = "$openapi_transformer_template";
const fetchImpl =
  typeof globalThis.fetch === "function" ? globalThis.fetch : crossFetch;
const generatedTestRoot = path.resolve(__dirname, "..", "generated-test");
const generatedTestServer = path.resolve(generatedTestRoot, "test-server");
const generatedTestPort = process.env.DD_TEST_SERVER_PORT || "18085";
const generatedTestRunnerBanner = "=== Using Generated Test Runner ===";
const generatedTestsEnabled =
  (process.env.DD_USE_GENERATED_TESTS || "false").toLowerCase() === "true";
let serverProcess: ChildProcess | undefined;
let serverLog: number | undefined;

if (
  generatedTestsEnabled &&
  (process.env.RECORD || "false") === "false" &&
  fs.existsSync(generatedTestServer)
) {
  if (process.env.DD_TEST_RUNNER_DATA === undefined) {
    process.env.DD_TEST_RUNNER_DATA = path.resolve(
      generatedTestRoot,
      "test-runner-data"
    );
  }
  if (process.env.DD_TEST_SERVER_URL === undefined) {
    process.env.DD_TEST_SERVER_URL = `http://127.0.0.1:${generatedTestPort}`;
  }
  if (process.env.DD_TEST_SERVER_EXECUTABLE === undefined) {
    process.env.DD_TEST_SERVER_EXECUTABLE = generatedTestServer;
  }
}

async function waitForGeneratedTestServer(): Promise<void> {
  const health = `${process.env.DD_TEST_SERVER_URL}${CONTROL_ROOT}/health`;
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetchImpl(health, {
        headers: { connection: "close" },
      });
      if (response.ok) return;
    } catch {
      // The generated server is still starting.
    }
    if (serverProcess?.exitCode !== null) {
      throw new Error("Generated test server exited before becoming healthy");
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Generated test server failed to become healthy");
}

BeforeAll(async function () {
  if (!generatedTestsEnabled || process.env.DD_TEST_SERVER_URL === undefined)
    return;
  const executable = process.env.DD_TEST_SERVER_EXECUTABLE;
  if (executable === undefined) {
    console.log(generatedTestRunnerBanner);
    return;
  }

  const logPath =
    process.env.DD_TEST_SERVER_LOG ||
    "/tmp/datadog-typescript-legacy-test-server.log";
  serverLog = openSync(logPath, "w");
  serverProcess = spawn(executable, ["--port", generatedTestPort], {
    stdio: ["ignore", serverLog, serverLog],
  });
  try {
    await waitForGeneratedTestServer();
    console.log(generatedTestRunnerBanner);
  } catch (error) {
    serverProcess.kill();
    throw new Error(`${error}; see ${logPath}`);
  }
});

AfterAll(async function () {
  if (serverProcess !== undefined) {
    const processToStop = serverProcess;
    serverProcess = undefined;
    if (processToStop.exitCode === null) {
      processToStop.kill("SIGTERM");
      await Promise.race([
        new Promise((resolve) => processToStop.once("exit", resolve)),
        new Promise((resolve) => setTimeout(resolve, 5000)),
      ]);
      if (processToStop.exitCode === null) processToStop.kill("SIGKILL");
    }
  }
  if (serverLog !== undefined) {
    closeSync(serverLog);
    serverLog = undefined;
  }
});

interface TestRunnerManifestItem {
  version: string;
  feature: string;
  scenario: string;
  file: string;
}

interface TestRunnerPlan {
  api: string;
  operation_id: string;
  operation_version?: string;
  request: {
    body?: { value: any };
    parameters: Array<{
      name: string;
      source: {
        type: "fixture" | "literal";
        path?: string;
        value?: any;
      };
    }>;
    pagination: boolean;
  };
}

export function testRunnerEnabled(): boolean {
  return generatedTestsEnabled && process.env.DD_TEST_RUNNER_DATA !== undefined;
}

export function testServerEnabled(): boolean {
  return generatedTestsEnabled && process.env.DD_TEST_SERVER_URL !== undefined;
}

async function controlRequest(endpoint: string, body?: any): Promise<any> {
  const response = await fetchImpl(
    `${process.env.DD_TEST_SERVER_URL}${CONTROL_ROOT}${endpoint}`,
    {
      method: "POST",
      headers: {
        connection: "close",
        "content-type": "application/json",
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Test server POST ${endpoint} failed (${
        response.status
      }): ${await response.text()}`
    );
  }
  return response.json();
}

export async function startTestServerSession(
  world: World,
  feature: string,
  scenario: string
): Promise<Date> {
  world.testFeature = feature;
  world.testScenario = scenario;
  const session = await controlRequest("/sessions", {
    version: world.apiVersion,
    feature,
    scenario,
  });
  world.testServerSession = session.session;
  return new Date(session.frozen_at);
}

export async function stopTestServerSession(world: World): Promise<void> {
  if (world.testServerSession === undefined) {
    return;
  }
  await controlRequest(`/sessions/${world.testServerSession}/stop`);
  world.testServerSession = undefined;
}

export function testServerFetch(session?: string): any {
  if (!testServerEnabled()) {
    return undefined;
  }
  if (session === undefined) {
    throw new Error("Generated test-server session has not been started");
  }
  return (url: string, options: any = {}) => {
    options.headers = {
      ...(options.headers || {}),
      connection: "close",
      "x-openapi-test-session": session,
    };
    return fetchImpl(url, options);
  };
}

function materialize(value: any, fixtures: { [key: string]: any }): any {
  if (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length === 1 &&
    TEMPLATE_KEY in value
  ) {
    return JSON.parse(value[TEMPLATE_KEY].templated(fixtures));
  }
  if (Array.isArray(value)) {
    return value.map((item) => materialize(item, fixtures));
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        materialize(item, fixtures),
      ])
    );
  }
  if (typeof value === "string") {
    return value.templated(fixtures);
  }
  return value;
}

function loadPlan(world: World): TestRunnerPlan {
  const root = path.resolve(process.env.DD_TEST_RUNNER_DATA as string);
  const manifest = JSON.parse(
    fs.readFileSync(path.join(root, "manifest.json")).toString()
  );
  const item = manifest.scenarios.find(
    (candidate: TestRunnerManifestItem) =>
      candidate.version === world.apiVersion &&
      candidate.feature === world.testFeature &&
      candidate.scenario === world.testScenario
  );
  if (item === undefined) {
    throw new Error(
      `Generated request plan not found for ${world.apiVersion}/${world.testFeature}/${world.testScenario}`
    );
  }
  return JSON.parse(fs.readFileSync(path.join(root, item.file)).toString());
}

export function applyTestRunnerPlan(world: World, pagination: boolean): void {
  if (!testRunnerEnabled()) {
    return;
  }
  const plan = loadPlan(world);
  world.operationVersion = plan.operation_version
    ? `${world.apiVersion}_${plan.operation_version.replace(/-/g, "")}`
    : undefined;
  if (plan.request.pagination !== pagination) {
    throw new Error(
      `Generated request plan pagination mismatch for ${world.testFeature}/${world.testScenario}`
    );
  }

  world.apiName = plan.api.replace("-", "");
  world.operationId = plan.operation_id;
  world.opts = {};
  world.pathParameters = {};

  if (plan.request.body != null) {
    world.opts.body = materialize(plan.request.body.value, world.fixtures);
  }
  for (const parameter of plan.request.parameters) {
    const value =
      parameter.source.type === "fixture"
        ? pathLookup(world.fixtures, parameter.source.path as string)
        : materialize(parameter.source.value, world.fixtures);
    const attribute = parameter.name.toAttributeName().toOperationName();
    world.opts[attribute] = value;
    world.pathParameters[parameter.name] = value;
    world.pathParameters[attribute] = value;
  }
}
