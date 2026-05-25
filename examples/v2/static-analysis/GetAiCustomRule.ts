/**
 * Get an AI custom rule returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAiCustomRule"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiGetAiCustomRuleRequest = {
  rulesetName: "my-ai-ruleset",
  ruleName: "my-ai-rule",
};

apiInstance
  .getAiCustomRule(params)
  .then((data: v2.AiCustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
