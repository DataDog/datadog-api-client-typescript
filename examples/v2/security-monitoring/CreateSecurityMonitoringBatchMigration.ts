/**
 * Create a batch migration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createSecurityMonitoringBatchMigration"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringBatchMigrationRequest =
  {
    body: {
      data: {
        type: "batchMigration",
        attributes: {
          name: "Example-Security-Monitoring",
          description: "Rules imported from Splunk",
          tags: ["source:splunk"],
          resources: [
            {
              name: "Repeated Windows login failures",
              description:
                "Detects repeated failed Windows authentication attempts.",
              inputType: "spl",
              input: "index=wineventlog EventCode=4625",
            },
          ],
        },
      },
    },
  };

apiInstance
  .createSecurityMonitoringBatchMigration(params)
  .then((data: v2.SecurityMonitoringBatchMigrationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
