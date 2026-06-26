/**
 * Get governance control notification settings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.getGovernanceControlNotificationSettings"
] = true;
const apiInstance = new v2.GovernanceControlsApi(configuration);

const params: v2.GovernanceControlsApiGetGovernanceControlNotificationSettingsRequest =
  {
    detectionType: "detection_type",
  };

apiInstance
  .getGovernanceControlNotificationSettings(params)
  .then((data: v2.ControlNotificationSettingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
