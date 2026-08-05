/**
 * Get a detection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getGovernanceDetection"] = true;
const apiInstance = new v2.GovernanceConsoleApi(configuration);

const params: v2.GovernanceConsoleApiGetGovernanceDetectionRequest = {
  detectionId: "detection_id",
};

apiInstance
  .getGovernanceDetection(params)
  .then((data: v2.GovernanceControlDetectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
