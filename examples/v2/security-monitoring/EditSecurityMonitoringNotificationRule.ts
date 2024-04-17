/**
 * Update a notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "notification_rule" in the system
const NOTIFICATION_RULE_DATA_ID = process.env
  .NOTIFICATION_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiEditSecurityMonitoringNotificationRuleRequest =
  {
    body: {
      data: {
        attributes: {
          version: 1,
          name: "Example-Security-Monitoring",
          enabled: false,
          selectors: {
            attributes: ["fim:true"],
            implicitVmRuleMatch: false,
            ruleTags: ["fim:true"],
            severities: ["high"],
            signalTags: [],
            ruleTypes: ["log_detection", "cloud_configuration"],
          },
          targets: ["test2"],
        },
        type: "notification_rules",
      },
    },
    notificationRuleId: NOTIFICATION_RULE_DATA_ID,
  };

apiInstance
  .editSecurityMonitoringNotificationRule(params)
  .then((data: v2.SecurityMonitoringNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
