/**
 * Publish a batch migration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.publishSecurityMonitoringBatchMigration"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiPublishSecurityMonitoringBatchMigrationRequest =
  {
    body: {
      data: {
        attributes: {
          resourceIds: ["c968cf83-56c2-4d54-a993-6c86dfb83527"],
        },
        type: "batchMigrationPublish",
      },
    },
    batchId: "7cdb3a75-64fb-46ce-9445-41969e78fe8e",
  };

apiInstance
  .publishSecurityMonitoringBatchMigration(params)
  .then((data: v2.SecurityMonitoringBatchMigrationPublishResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
