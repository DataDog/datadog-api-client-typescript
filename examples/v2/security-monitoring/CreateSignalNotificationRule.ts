/**
 * Create a new signal-based notification rule returns "Successfully created the notification rule." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSignalNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        name: "Rule 1",
        selectors: {
          query: "(source:production_service OR env:prod)",
          ruleTypes: ["misconfiguration", "attack_path"],
          severities: ["critical"],
          triggerSource: "security_findings",
        },
        targets: ["@john.doe@email.com"],
        timeAggregation: 86400,
      },
      type: "notification_rules",
    },
  },
};

apiInstance
  .createSignalNotificationRule(params)
  .then((data: v2.NotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
