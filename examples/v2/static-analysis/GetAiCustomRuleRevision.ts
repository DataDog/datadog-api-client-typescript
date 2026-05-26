/**
 * Get an AI custom rule revision returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAiCustomRuleRevision"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiGetAiCustomRuleRevisionRequest = {
  rulesetName: "my-ai-ruleset",
  ruleName: "my-ai-rule",
  id: "revision-abc-123",
};

apiInstance
  .getAiCustomRuleRevision(params)
  .then((data: v2.AiCustomRuleRevisionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
