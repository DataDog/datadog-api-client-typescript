/**
 * Patch a signal-based rule returns "Notification rule successfully patched." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_signal_notification_rule" in the system
const VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID = process.env
  .VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiPatchSignalNotificationRuleRequest = {
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
        version: 1,
      },
      id: VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID,
      type: "notification_rules",
    },
  },
  id: VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .patchSignalNotificationRule(params)
  .then((data: v2.NotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
