/**
 * List cost recommendation notification rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listCostRecommendationNotificationRules"] =
  true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

apiInstance
  .listCostRecommendationNotificationRules()
  .then((data: v2.CostRecommendationNotificationRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
