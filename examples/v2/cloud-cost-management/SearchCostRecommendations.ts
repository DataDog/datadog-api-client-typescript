/**
 * Search cost recommendations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.searchCostRecommendations"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiSearchCostRecommendationsRequest = {
  body: {
    filter: "@resource_table:aws_ec2_instance",
    sort: [
      {
        expression: "potential_daily_savings.amount",
        order: "DESC",
      },
    ],
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
