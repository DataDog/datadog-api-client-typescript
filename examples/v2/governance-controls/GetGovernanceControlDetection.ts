/**
 * Get a governance control detection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getGovernanceControlDetection"] = true;
const apiInstance = new v2.GovernanceControlsApi(configuration);

const params: v2.GovernanceControlsApiGetGovernanceControlDetectionRequest = {
  detectionType: "detection_type",
  detectionId: "detection_id",
};

apiInstance
  .getGovernanceControlDetection(params)
  .then((data: v2.GovernanceControlDetectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
