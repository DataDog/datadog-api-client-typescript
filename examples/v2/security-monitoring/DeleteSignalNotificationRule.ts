/**
 * Delete a signal-based rule returns "Rule successfully deleted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_signal_notification_rule" in the system
const VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID = process.env
  .VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiDeleteSignalNotificationRuleRequest = {
  id: VALID_SIGNAL_NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .deleteSignalNotificationRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
