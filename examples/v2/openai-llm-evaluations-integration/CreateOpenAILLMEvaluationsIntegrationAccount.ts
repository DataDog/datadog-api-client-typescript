/**
 * Create an OpenAI LLM Evaluations account returns "Created" response
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
  "v2.createOpenAILLMEvaluationsIntegrationAccount"
] = true;
const apiInstance = new v2.OpenAILLMEvaluationsIntegrationApi(configuration);

const params: v2.OpenAILLMEvaluationsIntegrationApiCreateOpenAILLMEvaluationsIntegrationAccountRequest =
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
        type: "integration-account",
      },
    },
  };

apiInstance
  .createOpenAILLMEvaluationsIntegrationAccount(params)
  .then((data: v2.OpenAILLMEvaluationsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
