/**
 * Get a governance control returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getGovernanceControl"] = true;
const apiInstance = new v2.GovernanceControlsApi(configuration);

const params: v2.GovernanceControlsApiGetGovernanceControlRequest = {
  detectionType: "detection_type",
};

apiInstance
  .getGovernanceControl(params)
  .then((data: v2.GovernanceControlResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
