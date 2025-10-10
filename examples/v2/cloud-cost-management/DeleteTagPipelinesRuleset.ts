/**
 * Delete tag pipeline ruleset returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiDeleteTagPipelinesRulesetRequest = {
  rulesetId: "ee10c3ff-312f-464c-b4f6-46adaa6d00a1",
};

apiInstance
  .deleteTagPipelinesRuleset(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
