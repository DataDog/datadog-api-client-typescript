/**
 * Update governance control notification settings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.updateGovernanceControlNotificationSettings"
] = true;
const apiInstance = new v2.GovernanceControlsApi(configuration);

const params: v2.GovernanceControlsApiUpdateGovernanceControlNotificationSettingsRequest =
  {
    body: {
      data: {
        attributes: {
          eventSettings: [
            {
              enabled: true,
              eventType: "new_detection",
              targets: [
                {
                  handle: "#governance-alerts",
                  type: "slack",
                },
              ],
            },
          ],
        },
        type: "control_notification_settings",
      },
    },
    detectionType: "detection_type",
  };

apiInstance
  .updateGovernanceControlNotificationSettings(params)
  .then((data: v2.ControlNotificationSettingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
