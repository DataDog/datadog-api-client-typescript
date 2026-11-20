/**
 * Update an OpenAI LLM Evaluations account returns "OK" response
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
  "v2.updateOpenAILLMEvaluationsIntegrationAccount"
] = true;
const apiInstance = new v2.OpenAILLMEvaluationsIntegrationApi(configuration);

const params: v2.OpenAILLMEvaluationsIntegrationApiUpdateOpenAILLMEvaluationsIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "bearer_token",
            token: "your-token",
          },
          dataflows: {
            openaiLlmCompletions: {
              enabled: true,
            },
            openaiProjectCloudCostData: {
              enabled: true,
            },
          },
          name: "openai-llm-evaluations-acme",
          settings: {
            customTags: "team:ai,env:prod",
          },
        },
        id: "3f8b2c1d-6e4a-4b9f-8c2d-1a7e5b9c0f63",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateOpenAILLMEvaluationsIntegrationAccount(params)
  .then((data: v2.OpenAILLMEvaluationsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
