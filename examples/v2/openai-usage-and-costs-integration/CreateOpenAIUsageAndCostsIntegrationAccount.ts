/**
 * Create an OpenAI Usage and Costs account returns "Created" response
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
  "v2.createOpenAIUsageAndCostsIntegrationAccount"
] = true;
const apiInstance = new v2.OpenAIUsageandCostsIntegrationApi(configuration);

const params: v2.OpenAIUsageandCostsIntegrationApiCreateOpenAIUsageAndCostsIntegrationAccountRequest =
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
        type: "integration-account",
      },
    },
  };

apiInstance
  .createOpenAIUsageAndCostsIntegrationAccount(params)
  .then((data: v2.OpenAIUsageAndCostsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
