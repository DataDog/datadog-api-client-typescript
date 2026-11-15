/**
 * Create a cost recommendation notification rule returns "Created" response
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
  "v2.createCostRecommendationNotificationRule"
] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiCreateCostRecommendationNotificationRuleRequest =
  {
    body: {
      data: {
        attributes: {
          channelId: "C0456ABCD",
          destinationType: "slack",
          enabled: true,
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
        type: "notification_rules",
      },
    },
  };

apiInstance
  .createCostRecommendationNotificationRule(params)
  .then((data: v2.CostRecommendationNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
