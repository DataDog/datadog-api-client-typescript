/**
 * Update a Nebius Cloud integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateNebiusCloudIntegrationAccount"] =
  true;
const apiInstance = new v2.NebiusCloudIntegrationApi(configuration);

const params: v2.NebiusCloudIntegrationApiUpdateNebiusCloudIntegrationAccountRequest =
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
        id: "e5f6a7b8-c9d0-4e1f-8a2b-3c4d5e6f7081",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateNebiusCloudIntegrationAccount(params)
  .then((data: v2.NebiusCloudIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
