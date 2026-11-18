/**
 * Update a cost recommendation notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations[
  "v2.updateCostRecommendationNotificationRule"
] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateCostRecommendationNotificationRuleRequest =
  {
    body: {
      data: {
        attributes: {
          channelId: "C0456ABCD",
          destinationType: "slack",
          enabled: false,
          frequency: "weekly",
          intervalExecutionDate: "2026-11-02",
          intervalExecutionTime: "09:30",
          mentionTargets: ["U01ABCDE"],
          messageCustomization: {
            actions: {
              viewInCcm: {
                bulk: true,
                perRec: true,
              },
            },
            header: {
              customText: " recommendations to review this week.",
              notificationName: true,
              totalSavings: true,
            },
            includeTags: ["team"],
            mode: "structured",
            perRec: {
              effort: true,
              risk: true,
              why: true,
            },
          },
          name: "Production recommendations",
          scopeQuery: "service:api AND env:prod",
          timezone: "America/New_York",
          weeklyExecutionDay: "monday",
          weeklyExecutionTime: "09:30",
          workspaceId: "T0123ABCD",
        },
        id: "2c59b248-6a91-4f95-972a-dc236cae9cbb",
        type: "notification_rules",
      },
    },
    notificationRuleId: "notification_rule_id",
  };

apiInstance
  .updateCostRecommendationNotificationRule(params)
  .then((data: v2.CostRecommendationNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
