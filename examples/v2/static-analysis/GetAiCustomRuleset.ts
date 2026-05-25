/**
 * Get an AI custom ruleset returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAiCustomRuleset"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiGetAiCustomRulesetRequest = {
  rulesetName: "my-ai-ruleset",
};

apiInstance
  .getAiCustomRuleset(params)
  .then((data: v2.AiCustomRulesetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
