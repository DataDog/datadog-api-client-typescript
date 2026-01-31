/**
 * Create a dataset returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createSecurityMonitoringDataset"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringDatasetRequest = {
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
          indexes: ["k9"],
          name: "my_dataset",
        },
        description: "A dataset for monitoring authentication events",
      },
      type: "security_monitoring_dataset",
    },
  },
};

apiInstance
  .createSecurityMonitoringDataset(params)
  .then((data: v2.SecurityMonitoringDatasetCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
