/**
 * Search cost recommendations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.searchCostRecommendations"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiSearchCostRecommendationsRequest = {
  body: {
    data: {
      attributes: {
        scope: "ccm",
        sort: [
          {
            expression: "potential_daily_savings.amount",
            order: "DESC",
          },
        ],
      },
      id: "@resource_table:aws_ec2_instance",
      type: "recommendations_filter",
    },
  },
};

apiInstance
  .searchCostRecommendations(params)
  .then((data: v2.CostRecommendationArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
