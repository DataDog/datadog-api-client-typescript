/**
 * Update an OpenAI Usage and Costs account returns "OK" response
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
  "v2.updateOpenAIUsageAndCostsIntegrationAccount"
] = true;
const apiInstance = new v2.OpenAIUsageAndCostsIntegrationApi(configuration);

const params: v2.OpenAIUsageAndCostsIntegrationApiUpdateOpenAIUsageAndCostsIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "bearer_token",
            token: "your-token",
          },
          dataflows: {
            openaiCloudCostData: {
              enabled: true,
            },
          },
          name: "openai-usage-and-costs-acme",
          settings: {
            customTags: "team:ai,env:prod",
          },
        },
        id: "9c4e7a2b-1d5f-4e8a-b3c6-0f2d8a6e4b17",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateOpenAIUsageAndCostsIntegrationAccount(params)
  .then((data: v2.OpenAIUsageAndCostsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
