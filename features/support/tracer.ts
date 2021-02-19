import { tracer } from "dd-trace";
import path from "path";

const SAMPLING_RULE_DECISION = require("dd-trace/packages/dd-trace/src/constants");
const {
  TEST_TYPE,
  TEST_NAME,
  TEST_SUITE,
  TEST_STATUS,
  getTestEnvironmentMetadata,
} = require("dd-trace/packages/dd-trace/src/plugins/util/test");

const PickleRunner = require("@cucumber/cucumber/lib/runtime/pickle_runner")
  .default;
const scenarioFunction = PickleRunner.prototype.run;
const stepFunction = PickleRunner.prototype.runStep;

function setStatusFromResult(span: any, result: any) {
  if (result.status == 1) {
    span.setTag(TEST_STATUS, "pass");
  } else if (result.status == 2) {
    span.setTag(TEST_STATUS, "skip");
  } else {
    span.setTag(TEST_STATUS, "fail");
    span.setTag("error.msg", result.message);
  }
}

async function handleRun(this: void, ...args: any[]) {
  const pickleRunner = this as any;
  const testName = pickleRunner.pickle.name;
  const testSuite = path.relative(process.cwd(), pickleRunner.pickle.uri);
  const testEnvironmentMetadata = getTestEnvironmentMetadata("cucumber");

  const commonSpanTags = {
    [TEST_TYPE]: "test",
    [TEST_NAME]: testName,
    [TEST_SUITE]: testSuite,
    [SAMPLING_RULE_DECISION]: 1,
    ...testEnvironmentMetadata,
  };

  return await tracer.trace(
    "cucumber.test",
    {
      type: "test",
      resource: testName,
      tags: commonSpanTags,
    },
    async (span: any) => {
      const result = await scenarioFunction.apply(pickleRunner, args);
      setStatusFromResult(span, pickleRunner.getWorstStepResult());
      return result;
    }
  );
}

async function handleRunStep(this: void, ...args: any[]) {
  const step = this as any;
  const resource = args[0].isHook ? "hook" : args[0].pickleStep?.text;
  return await tracer.trace(
    "cucumber.step",
    { type: "test", resource: resource },
    async (span: any) => {
      const result = await stepFunction.apply(step, args);
      setStatusFromResult(span, result);
      return result;
    }
  );
}

PickleRunner.prototype.run = handleRun;
PickleRunner.prototype.runStep = handleRunStep;
// TODO store the original methods

const v1 = require('../../packages/datadog-api-client-v1/http/isomorphic-fetch').IsomorphicFetchHttpLibrary;
const v1Send = v1.prototype.send;
const v2 = require('../../packages/datadog-api-client-v2/http/isomorphic-fetch').IsomorphicFetchHttpLibrary;
const v2Send = v2.prototype.send;

function wrap(method: any) {
  function send(request: any): any {
    return tracer.trace(
      "fetch",
      { type: "http", resource: request.getUrl() },
      (span: any) => {
        let spanId = span.context().toSpanId();
        let traceId = span.context().toTraceId();
        request.setHeaderParam('x-datadog-parent-id', spanId);
        request.setHeaderParam('x-datadog-trace-id', traceId);
        return method(request);
      }
    );
  }
  return send;
}

v1.prototype.send = wrap(v1Send);
v2.prototype.send = wrap(v2Send);

export default tracer;
