/**
 * Get dataset dependencies returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.batchGetSecurityMonitoringDatasetDependencies"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiBatchGetSecurityMonitoringDatasetDependenciesRequest =
  {
    body: {
      data: {
        attributes: {
          datasetIds: ["dataset-1"],
        },
        type: "security_monitoring_dataset_dependencies",
      },
    },
  };

apiInstance
  .batchGetSecurityMonitoringDatasetDependencies(params)
  .then((data: v2.SecurityMonitoringDatasetDependenciesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
