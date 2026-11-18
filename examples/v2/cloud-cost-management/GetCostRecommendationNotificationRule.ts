/**
 * Get a cost recommendation notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getCostRecommendationNotificationRule"] =
  true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCostRecommendationNotificationRuleRequest =
  {
    notificationRuleId: "notification_rule_id",
  };

apiInstance
  .getCostRecommendationNotificationRule(params)
  .then((data: v2.CostRecommendationNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
