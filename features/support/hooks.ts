import { AfterAll, Before } from "@cucumber/cucumber";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";

import { World } from "./world";
import log from "loglevel";
const logger = log.getLogger("testing")

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

AfterAll( function (this: World) {
  const dd_service = process.env.DD_SERVICE;
  const ci_pipeline_id = process.env.GITHUB_RUN_ID;
  if (dd_service !== undefined && ci_pipeline_id !== undefined) {
    logger.info("\nTest reports:\n")
    logger.info("* View test APM traces and detailed time reports on Datadog (can take a few minutes to become available):")
    logger.info(`* https://app.datadoghq.com/ci/test-runs?query=%40test.service%3A${dd_service}%20%40ci.pipeline.id%3A${ci_pipeline_id}&index=citest\n`)
  }
});
