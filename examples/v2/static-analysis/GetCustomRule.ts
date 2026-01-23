/**
 * Show Custom Rule returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCustomRule"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiGetCustomRuleRequest = {
  rulesetName: "ruleset_name",
  ruleName: "rule_name",
};

apiInstance
  .getCustomRule(params)
  .then((data: v2.CustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
