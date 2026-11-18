/**
 * Update a cost recommendation custom rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateCostRecommendationCustomRule"] =
  true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateCostRecommendationCustomRuleRequest =
  {
    body: {
      data: {
        attributes: {
          enabled: false,
          filters: [
            {
              filterType: "is",
              tag: "env",
              values: ["staging"],
            },
          ],
          name: "Staging and development instances",
          notes: "Staging instances can run with less headroom.",
          settings: {
            lookback_days: 14,
            max_cpu_user_limit: 0.05,
          },
        },
        id: "8a1b6f3e-2c4d-4e5f-9a7b-1c2d3e4f5a6b",
        type: "custom_rules",
      },
    },
    customRuleId: "custom_rule_id",
  };

apiInstance
  .updateCostRecommendationCustomRule(params)
  .then((data: v2.CostRecommendationCustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
