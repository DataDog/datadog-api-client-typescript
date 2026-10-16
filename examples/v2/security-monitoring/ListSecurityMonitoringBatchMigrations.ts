/**
 * List batch migrations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listSecurityMonitoringBatchMigrations"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "batch_migration" in the system

const params: v2.SecurityMonitoringApiListSecurityMonitoringBatchMigrationsRequest =
  {
    filterQuery: "id:7cdb3a75-64fb-46ce-9445-41969e78fe8e",
  };

apiInstance
  .listSecurityMonitoringBatchMigrations(params)
  .then((data: v2.SecurityMonitoringBatchMigrationsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
