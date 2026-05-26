/**
 * Get the version history of a dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.getSecurityMonitoringDatasetVersionHistory"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetSecurityMonitoringDatasetVersionHistoryRequest =
  {
    datasetId: "123e4567-e89b-12d3-a456-426614174000",
  };

apiInstance
  .getSecurityMonitoringDatasetVersionHistory(params)
  .then((data: v2.SecurityMonitoringDatasetVersionHistoryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
