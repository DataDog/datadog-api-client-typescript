/**
 * Show Custom Ruleset returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCustomRuleset"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiGetCustomRulesetRequest = {
  rulesetName: "ruleset_name",
};

apiInstance
  .getCustomRuleset(params)
  .then((data: v2.CustomRulesetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
