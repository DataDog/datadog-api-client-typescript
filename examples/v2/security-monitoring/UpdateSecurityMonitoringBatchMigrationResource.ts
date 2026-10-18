/**
 * Update a batch migration resource returns "OK" response
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
  "v2.updateSecurityMonitoringBatchMigrationResource"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "batch_migration" in the system
const BATCH_MIGRATION_DATA_ID = process.env.BATCH_MIGRATION_DATA_ID as string;

// there is a valid "batch_migration_resource" in the system
const BATCH_MIGRATION_RESOURCE_ID = process.env
  .BATCH_MIGRATION_RESOURCE_ID as string;

const params: v2.SecurityMonitoringApiUpdateSecurityMonitoringBatchMigrationResourceRequest =
  {
    body: {
      data: {
        type: "batchMigrationResource",
        attributes: {
          input: "index=wineventlog EventCode=4625 | stats count by user",
        },
      },
    },
    batchId: BATCH_MIGRATION_DATA_ID,
    resourceId: BATCH_MIGRATION_RESOURCE_ID,
  };

apiInstance
  .updateSecurityMonitoringBatchMigrationResource(params)
  .then((data: v2.SecurityMonitoringBatchMigrationResourceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
