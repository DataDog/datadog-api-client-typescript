/**
 * Create a CoreWeave integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createCoreWeaveCloudIntegrationAccount"] =
  true;
const apiInstance = new v2.CoreWeaveIntegrationApi(configuration);

const params: v2.CoreWeaveIntegrationApiCreateCoreWeaveCloudIntegrationAccountRequest =
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
        type: "integration-account",
      },
    },
  };

apiInstance
  .createCoreWeaveCloudIntegrationAccount(params)
  .then((data: v2.CoreWeaveCloudIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
