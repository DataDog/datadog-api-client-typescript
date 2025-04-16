/**
 * Get a monitor notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getMonitorNotificationRule"] = true;
const apiInstance = new v2.MonitorsApi(configuration);

// there is a valid "monitor_notification_rule" in the system
const MONITOR_NOTIFICATION_RULE_DATA_ID = process.env
  .MONITOR_NOTIFICATION_RULE_DATA_ID as string;

const params: v2.MonitorsApiGetMonitorNotificationRuleRequest = {
  ruleId: MONITOR_NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .getMonitorNotificationRule(params)
  .then((data: v2.MonitorNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
