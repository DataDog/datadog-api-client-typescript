/**
 * List AI custom rule revisions returns "Successful response" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAiCustomRuleRevisions"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiListAiCustomRuleRevisionsRequest = {
  rulesetName: "my-ai-ruleset",
  ruleName: "my-ai-rule",
};

(async () => {
  try {
    for await (const item of apiInstance.listAiCustomRuleRevisionsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
