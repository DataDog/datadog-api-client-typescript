/**
 * Show Custom Rule Revision returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCustomRuleRevision"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiGetCustomRuleRevisionRequest = {
  rulesetName: "ruleset_name",
  ruleName: "rule_name",
  id: "id",
};

apiInstance
  .getCustomRuleRevision(params)
  .then((data: v2.CustomRuleRevisionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
