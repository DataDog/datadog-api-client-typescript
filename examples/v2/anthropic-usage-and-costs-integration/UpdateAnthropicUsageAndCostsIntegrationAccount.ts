/**
 * Update an Anthropic Usage and Costs account returns "OK" response
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
  "v2.updateAnthropicUsageAndCostsIntegrationAccount"
] = true;
const apiInstance = new v2.AnthropicUsageAndCostsIntegrationApi(configuration);

const params: v2.AnthropicUsageAndCostsIntegrationApiUpdateAnthropicUsageAndCostsIntegrationAccountRequest =
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
        id: "9b4c7e2a-1d6f-4a3b-8e5c-0f2d7a9b6c18",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateAnthropicUsageAndCostsIntegrationAccount(params)
  .then((data: v2.AnthropicUsageAndCostsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
