/**
 * Get details of a signal-based notification rule returns "Notification rule details." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_signal_notification_rule" in the system
const VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID = process.env
  .VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetSignalNotificationRuleRequest = {
  id: VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .getSignalNotificationRule(params)
  .then((data: v2.NotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
