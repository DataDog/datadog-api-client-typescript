/**
 * Create an Anthropic Usage and Costs account returns "Created" response
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
  "v2.createAnthropicUsageAndCostsIntegrationAccount"
] = true;
const apiInstance = new v2.AnthropicUsageAndCostsIntegrationApi(configuration);

const params: v2.AnthropicUsageAndCostsIntegrationApiCreateAnthropicUsageAndCostsIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "bearer_token",
            token: "your-token",
          },
          dataflows: {
            anthropicCloudCostMetrics: {
              enabled: true,
            },
          },
          name: "anthropic-acme",
        },
        type: "integration-account",
      },
    },
  };

apiInstance
  .createAnthropicUsageAndCostsIntegrationAccount(params)
  .then((data: v2.AnthropicUsageAndCostsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
