/**
 * Update a Temporal Cloud OpenMetrics account returns "OK" response
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
  "v2.updateTemporalCloudOpenMetricsIntegrationAccount"
] = true;
const apiInstance = new v2.TemporalCloudOpenMetricsIntegrationApi(
  configuration
);

const params: v2.TemporalCloudOpenMetricsIntegrationApiUpdateTemporalCloudOpenMetricsIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "bearer_token",
            token: "your-token",
          },
          name: "temporal-cloud-prod",
          settings: {
            includeOptInLabels: false,
            namespacesToInclude: "prod-*,billing.a1b2c",
          },
        },
        id: "7c2d4e91-5a3b-4f68-b0e2-9d1f6a8c3e57",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateTemporalCloudOpenMetricsIntegrationAccount(params)
  .then((data: v2.TemporalCloudOpenMetricsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
