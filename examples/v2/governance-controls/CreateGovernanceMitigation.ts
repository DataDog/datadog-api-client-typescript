/**
 * Mitigate governance detections returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createGovernanceMitigation"] = true;
const apiInstance = new v2.GovernanceControlsApi(configuration);

const params: v2.GovernanceControlsApiCreateGovernanceMitigationRequest = {
  body: {
    data: {
      attributes: {
        detectionIds: ["3f9b2c1a-8d4e-4a6b-9c2f-1e7d5a0b3c4d"],
        detectionType: "unused_api_keys",
        mitigationType: "revoke_api_key",
      },
      type: "governance_control_detection",
    },
  },
};

apiInstance
  .createGovernanceMitigation(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
