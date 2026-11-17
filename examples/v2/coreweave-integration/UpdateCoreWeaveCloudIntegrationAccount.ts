/**
 * Update a CoreWeave integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateCoreWeaveCloudIntegrationAccount"] =
  true;
const apiInstance = new v2.CoreWeaveIntegrationApi(configuration);

const params: v2.CoreWeaveIntegrationApiUpdateCoreWeaveCloudIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            apiToken: "CW-SECRET-xxxxxxxxxxxxxxxxxxxx",
            authType: "coreweave_api_token",
          },
          dataflows: {
            coreweaveCloudLogs: {
              enabled: true,
            },
            coreweaveCloudMetrics: {
              enabled: true,
            },
          },
          name: "coreweave-prod",
          settings: {
            accountTags: ["env:prod", "team:gpu"],
            clusterFilters: ["cluster:prod-*", "!cluster:dev"],
          },
        },
        id: "f7a8b9c0-d1e2-4f3a-9b4c-5d6e7f8091a2",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateCoreWeaveCloudIntegrationAccount(params)
  .then((data: v2.CoreWeaveCloudIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
