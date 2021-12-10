import { Before, AfterAll } from "@cucumber/cucumber";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import log from "loglevel";

import tracer from "./tracer";
import { World } from "./world";

Before({ tags: "@skip or @skip-typescript" }, function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return "skipped" as any;
});

Before({ tags: "@integration-only" }, function () {
  if (process.env["RECORD"] != "none") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return "skipped" as any;
  }
});

Before({ tags: "@replay-only" }, function () {
  if ("RECORD" in process.env && process.env["RECORD"] != "false") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return "skipped" as any;
  }
});

Before(function (
  this: World,
  { gherkinDocument, pickle }: ITestCaseHookParameter
) {
  const parts = gherkinDocument.uri?.split("/") as string[];
  this.apiVersion = parts[parts.length - 2];
});

AfterAll(function (this: World) {
  const writer = (tracer as any)._tracer?._exporter?._writer;
  if (writer !== undefined) {
    try {
      (tracer as any)._tracer._exporter._writer.flush();
    } catch (error) {
      const logger = log.getLogger("testing");
      logger.error(error);
    }
  }

  let dd_service = process.env.DD_SERVICE;
  let ci_pipeline_id = process.env.GITHUB_RUN_ID;
  if (dd_service !== undefined && ci_pipeline_id !== undefined) {
    console.log("\nTest reports:\n")
    console.log("* View test APM traces and detailed time reports on Datadog (can take a few minutes to become available):")
    console.log(`* https://app.datadoghq.com/ci/test-runs?query=%40test.service%3A${dd_service}%20%40ci.pipeline.id%3A${ci_pipeline_id}&index=citest\n`)
  }
});
