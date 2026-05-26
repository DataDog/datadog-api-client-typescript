/**
 * Delete an AI custom ruleset returns "Successfully deleted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteAiCustomRuleset"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiDeleteAiCustomRulesetRequest = {
  rulesetName: "my-ai-ruleset",
};

apiInstance
  .deleteAiCustomRuleset(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
