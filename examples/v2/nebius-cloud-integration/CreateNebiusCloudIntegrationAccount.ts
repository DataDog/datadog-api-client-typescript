/**
 * Create a Nebius Cloud integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createNebiusCloudIntegrationAccount"] =
  true;
const apiInstance = new v2.NebiusCloudIntegrationApi(configuration);

const params: v2.NebiusCloudIntegrationApiCreateNebiusCloudIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "nebius_service_account",
            privateKey:
              "-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----",
            publicKeyId: "publickey-yyyyyyyy",
            serviceAccountId: "serviceaccount-xxxxxxxx",
            staticApiKey: "eyJhbGciOi...static-api-key",
          },
          dataflows: {
            nebiusCloudCostCollection: {
              enabled: true,
              settings: {
                accessKeyId: "AKID0123456789ABCDEF",
                accessKeySecret: "wJalrXUtnFEMIstaticaccesskey",
                bucketName: "nebius-cost-exports",
                bucketPrefixPath: "cost-export/2026/",
                bucketRegion: "eu-north1",
              },
            },
            nebiusCloudLogs: {
              enabled: true,
              settings: {
                enabledServices: [
                  "nebius-cloud-compute",
                  "nebius-cloud-kubernetes",
                  "default",
                ],
              },
            },
            nebiusCloudResources: {
              enabled: true,
            },
            nebiusCloudServiceQuotaCollection: {
              enabled: true,
            },
          },
          name: "nebius-prod",
          settings: {
            accountTags: ["env:prod", "team:ai"],
            tenantId: "tenant-12345678",
          },
        },
        type: "integration-account",
      },
    },
  };

apiInstance
  .createNebiusCloudIntegrationAccount(params)
  .then((data: v2.NebiusCloudIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
