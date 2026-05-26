/**
 * Update a dataset returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateSecurityMonitoringDataset"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateSecurityMonitoringDatasetRequest = {
  body: {
    data: {
      attributes: {
        definition: {
          columns: [
            {
              column: "message",
              type: "string",
            },
          ],
          dataSource: "logs",
          indexes: [],
          name: "sample_dataset",
          queryFilter: "status = 'active'",
          search: {
            query: "*",
          },
          storage: "hot",
          tableName: "my_reference_table",
          timeWindow: {
            from: 1700000000000,
            to: 1700003600000,
          },
        },
        description: "A sample dataset used for detection rules.",
        version: 1,
      },
      type: "datasetUpdate",
    },
  },
  datasetId: "123e4567-e89b-12d3-a456-426614174000",
};

apiInstance
  .updateSecurityMonitoringDataset(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
