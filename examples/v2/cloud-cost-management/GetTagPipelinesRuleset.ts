/**
 * Get a tag pipeline ruleset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetTagPipelinesRulesetRequest = {
  rulesetId: "a1e9de9b-b88e-41c6-a0cd-cc0ebd7092de",
};

apiInstance
  .getTagPipelinesRuleset(params)
  .then((data: v2.RulesetResp) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
