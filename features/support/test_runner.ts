import fs from "fs";
import path from "path";
import { fetch as crossFetch } from "cross-fetch";

import { pathLookup } from "./templating";
import { World } from "./world";

const CONTROL_ROOT = "/__openapi_transformer__";
const TEMPLATE_KEY = "$openapi_transformer_template";
const fetchImpl =
  typeof globalThis.fetch === "function" ? globalThis.fetch : crossFetch;

interface TestRunnerManifestItem {
  version: string;
  feature: string;
  scenario: string;
  file: string;
}

interface TestRunnerPlan {
  api: string;
  operation_id: string;
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
  return process.env.DD_TEST_RUNNER_DATA !== undefined;
}

export function testServerEnabled(): boolean {
  return process.env.DD_TEST_SERVER_URL !== undefined;
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
  const result = await controlRequest(
    `/sessions/${world.testServerSession}/stop`
  );
  world.testServerSession = undefined;
  if (result.complete === false) {
    throw new Error(
      `Test server session consumed ${result.interactions} of ${result.total_interactions} interactions`
    );
  }
}

export async function markMainRequestComplete(world: World): Promise<void> {
  if (world.testServerSession === undefined) {
    return;
  }
  await controlRequest(`/sessions/${world.testServerSession}/main-complete`);
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
