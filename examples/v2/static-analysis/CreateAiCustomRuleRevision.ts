/**
 * Create an AI custom rule revision returns "Successfully created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAiCustomRuleRevision"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateAiCustomRuleRevisionRequest = {
  body: {
    data: {
      attributes: {
        category: "SECURITY",
        content: "Content",
        cwe: "79",
        description: "Ruleset description",
        directories: [],
        executionMode: "auto",
        globs: ["**/*.py"],
        isPublished: false,
        isTesting: false,
        severity: "ERROR",
        shortDescription: "Ruleset short description",
        versionId: 1,
      },
      id: "revision-abc-123",
      type: "ai_rule_revision",
    },
  },
  rulesetName: "my-ai-ruleset",
  ruleName: "my-ai-rule",
};

apiInstance
  .createAiCustomRuleRevision(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
