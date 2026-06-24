/**
 * Update a governance control returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateGovernanceControl"] = true;
const apiInstance = new v2.GovernanceControlsApi(configuration);

const params: v2.GovernanceControlsApiUpdateGovernanceControlRequest = {
  body: {
    data: {
      attributes: {
        detectionFrequency: "daily",
        mitigationType: "revoke_api_key",
        name: "Unused API Keys",
        notificationFrequency: "daily",
        notificationType: "slack",
      },
      id: "0d4e6f8a-1b2c-3d4e-5f6a-7b8c9d0e1f2a",
      type: "governance_control",
    },
  },
  detectionType: "detection_type",
};

apiInstance
  .updateGovernanceControl(params)
  .then((data: v2.GovernanceControlResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
