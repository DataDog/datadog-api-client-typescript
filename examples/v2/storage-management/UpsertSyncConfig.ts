/**
 * Enable Storage Management for a bucket returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StorageManagementApi(configuration);

const params: v2.StorageManagementApiUpsertSyncConfigRequest = {
  body: {
    data: {
      attributes: {
        aws: {
          awsAccountId: "123456789012",
          destinationBucketName: "my-inventory-bucket",
          destinationBucketRegion: "us-east-1",
          destinationPrefix: "logs/",
        },
        azure: {
          clientId: "11111111-1111-1111-1111-111111111111",
          container: "inventory-container",
          resourceGroup: "my-resource-group",
          storageAccount: "mystorageaccount",
          subscriptionId: "33333333-3333-3333-3333-333333333333",
          tenantId: "22222222-2222-2222-2222-222222222222",
        },
        gcp: {
          destinationBucketName: "my-inventory-reports",
          projectId: "my-gcp-project",
          serviceAccountEmail: "reader@my-gcp-project.iam.gserviceaccount.com",
          sourceBucketName: "my-monitored-bucket",
        },
      },
      id: "aws",
      type: "cloud_provider",
    },
  },
};

apiInstance
  .upsertSyncConfig(params)
  .then((data: v2.CloudInventorySyncConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
