/**
 * Create a Temporal Cloud OpenMetrics account returns "Created" response
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
  "v2.createTemporalCloudOpenMetricsIntegrationAccount"
] = true;
const apiInstance = new v2.TemporalCloudOpenMetricsIntegrationApi(
  configuration
);

const params: v2.TemporalCloudOpenMetricsIntegrationApiCreateTemporalCloudOpenMetricsIntegrationAccountRequest =
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
        type: "integration-account",
      },
    },
  };

apiInstance
  .createTemporalCloudOpenMetricsIntegrationAccount(params)
  .then((data: v2.TemporalCloudOpenMetricsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
