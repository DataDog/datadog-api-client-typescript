/**
 * Cancel a batch migration returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.cancelSecurityMonitoringBatchMigration"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCancelSecurityMonitoringBatchMigrationRequest =
  {
    batchId: "7cdb3a75-64fb-46ce-9445-41969e78fe8e",
  };

apiInstance
  .cancelSecurityMonitoringBatchMigration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
