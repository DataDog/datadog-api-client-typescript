/**
 * Update a monitor notification rule with scope returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MonitorsApi(configuration);

// there is a valid "monitor_notification_rule" in the system
const MONITOR_NOTIFICATION_RULE_DATA_ID = process.env
  .MONITOR_NOTIFICATION_RULE_DATA_ID as string;

const params: v2.MonitorsApiUpdateMonitorNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        filter: {
          scope: "test:example-monitor",
        },
        name: "updated rule",
        recipients: ["slack-test-channel"],
      },
      id: MONITOR_NOTIFICATION_RULE_DATA_ID,
      type: "monitor-notification-rule",
    },
  },
  ruleId: MONITOR_NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .updateMonitorNotificationRule(params)
  .then((data: v2.MonitorNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
