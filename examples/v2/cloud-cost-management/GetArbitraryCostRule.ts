/**
 * Get arbitrary cost rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetArbitraryCostRuleRequest = {
  ruleId: 123456,
};

apiInstance
  .getArbitraryCostRule(params)
  .then((data: v2.ArbitraryRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
