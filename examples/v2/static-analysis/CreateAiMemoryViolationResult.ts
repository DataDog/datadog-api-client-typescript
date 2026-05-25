/**
 * Create an AI memory violation result returns "Successfully created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAiMemoryViolationResult"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateAiMemoryViolationResultRequest = {
  body: {
    data: {
      attributes: {
        line: 10,
        message: "This is a false positive because the input is sanitized.",
        name: "src/main.py",
        repositoryId: "my-repo",
        rule: "my-ai-ruleset/my-ai-rule",
        sha: "abc123def456789012345678901234567890abcd",
        type: "FP",
      },
      id: "violation-abc",
      type: "ai_memory_violation_result",
    },
  },
};

apiInstance
  .createAiMemoryViolationResult(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
