/**
 * Get a dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSecurityMonitoringDataset"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetSecurityMonitoringDatasetRequest = {
  datasetId: "123e4567-e89b-12d3-a456-426614174000",
};

apiInstance
  .getSecurityMonitoringDataset(params)
  .then((data: v2.SecurityMonitoringDatasetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
