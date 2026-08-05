/**
 * Update notification settings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateGovernanceNotificationSettings"] =
  true;
const apiInstance = new v2.GovernanceConsoleApi(configuration);

const params: v2.GovernanceConsoleApiUpdateGovernanceNotificationSettingsRequest =
  {
    body: {
      data: {
        attributes: {
          assignmentNotificationsEnabled: true,
        },
        type: "governance_notification_settings",
      },
    },
  };

apiInstance
  .updateGovernanceNotificationSettings(params)
  .then((data: v2.GovernanceNotificationSettingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
