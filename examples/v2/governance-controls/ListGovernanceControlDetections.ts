/**
 * List governance control detections returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listGovernanceControlDetections"] = true;
const apiInstance = new v2.GovernanceControlsApi(configuration);

const params: v2.GovernanceControlsApiListGovernanceControlDetectionsRequest = {
  detectionType: "detection_type",
};

apiInstance
  .listGovernanceControlDetections(params)
  .then((data: v2.GovernanceControlDetectionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
