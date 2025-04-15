import { Before } from "@cucumber/cucumber";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import tracer from "./tracer";

import { World } from "./world";

Before(function (
  this: World,
  { gherkinDocument, pickle }: ITestCaseHookParameter,
) {
  const parts = gherkinDocument.uri?.split("/") as string[];
  this.apiVersion = parts[parts.length - 2];

  const span = tracer.scope().active() as any;
  if (span !== null) {
    const codeowners = JSON.stringify(
      pickle.tags
        .filter((tag) => tag.name.startsWith("@team:"))
        .map((tag) => "@" + tag.name.substring("@team:".length)),
    );
    span.setTag("test.codeowners", codeowners);
  }
});

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
