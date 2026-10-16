/**
 * Add resources to a batch migration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations[
  "v2.createSecurityMonitoringBatchMigrationResources"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "batch_migration" in the system
const BATCH_MIGRATION_DATA_ID = process.env.BATCH_MIGRATION_DATA_ID as string;

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringBatchMigrationResourcesRequest =
  {
    body: {
      data: {
        type: "batchMigrationResources",
        attributes: {
          resources: [
            {
              name: "Linux sudo abuse",
              inputType: "spl",
              input: `index=linux process=sudo "authentication failure" | stats count by user, host`,
            },
          ],
        },
      },
    },
    batchId: BATCH_MIGRATION_DATA_ID,
  };

apiInstance
  .createSecurityMonitoringBatchMigrationResources(params)
  .then((data: v2.SecurityMonitoringBatchMigrationResourcesCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
