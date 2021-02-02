import { After, Before } from "@cucumber/cucumber";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";

import { World } from "./world";

Before({ tags: "@skip" }, function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return "skipped" as any;
});

Before({ tags: "@integration-only" }, function () {
  if (process.env["RECORD"] != "none") {
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
  this.document = gherkinDocument;
});

After(function (this: World) {
  this.cleanup();
});
