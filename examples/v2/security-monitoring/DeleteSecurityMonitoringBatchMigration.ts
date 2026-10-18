/**
 * Delete a batch migration returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteSecurityMonitoringBatchMigration"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "batch_migration" in the system
const BATCH_MIGRATION_DATA_ID = process.env.BATCH_MIGRATION_DATA_ID as string;

const params: v2.SecurityMonitoringApiDeleteSecurityMonitoringBatchMigrationRequest =
  {
    batchId: BATCH_MIGRATION_DATA_ID,
  };

apiInstance
  .deleteSecurityMonitoringBatchMigration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
