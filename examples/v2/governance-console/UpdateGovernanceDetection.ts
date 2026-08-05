/**
 * Update a detection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateGovernanceDetection"] = true;
const apiInstance = new v2.GovernanceConsoleApi(configuration);

const params: v2.GovernanceConsoleApiUpdateGovernanceDetectionRequest = {
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
  detectionId: "detection_id",
};

apiInstance
  .updateGovernanceDetection(params)
  .then((data: v2.GovernanceControlDetectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
