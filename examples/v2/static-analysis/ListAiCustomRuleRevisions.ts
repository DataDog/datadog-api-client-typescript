/**
 * List AI custom rule revisions returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAiCustomRuleRevisions"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiListAiCustomRuleRevisionsRequest = {
  rulesetName: "my-ai-ruleset",
  ruleName: "my-ai-rule",
};

apiInstance
  .listAiCustomRuleRevisions(params)
  .then((data: v2.AiCustomRuleRevisionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
