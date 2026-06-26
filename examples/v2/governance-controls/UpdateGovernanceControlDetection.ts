/**
 * Update a governance control detection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateGovernanceControlDetection"] = true;
const apiInstance = new v2.GovernanceControlsApi(configuration);

const params: v2.GovernanceControlsApiUpdateGovernanceControlDetectionRequest =
  {
    body: {
      data: {
        attributes: {
          assignedTeam: "platform-security",
          assignedTo: "11111111-2222-3333-4444-555555555555",
          mitigateAfter: new Date(2024, 3, 15, 0, 0, 0, 0),
          state: "exception",
        },
        type: "governance_control_detection",
      },
    },
    detectionType: "detection_type",
    detectionId: "detection_id",
  };

apiInstance
  .updateGovernanceControlDetection(params)
  .then((data: v2.GovernanceControlDetectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
