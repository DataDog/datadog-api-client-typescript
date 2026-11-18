/**
 * Create a cost recommendation custom rule returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createCostRecommendationCustomRule"] =
  true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiCreateCostRecommendationCustomRuleRequest =
  {
    body: {
      data: {
        attributes: {
          enabled: true,
          filters: [
            {
              filterType: "is",
              tag: "env",
              values: ["staging"],
            },
          ],
          name: "Staging instances",
          notes: "Staging instances can run with less headroom.",
          recommenderId: "aws_ec2_instance_unused",
          settings: {
            lookback_days: 14,
            max_cpu_user_limit: 0.05,
          },
        },
        type: "custom_rules",
      },
    },
  };

apiInstance
  .createCostRecommendationCustomRule(params)
  .then((data: v2.CostRecommendationCustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
