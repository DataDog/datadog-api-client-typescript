/**
 * Create an OpenAI Model Inference account returns "Created" response
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
  "v2.createOpenAIModelInferenceIntegrationAccount"
] = true;
const apiInstance = new v2.OpenAIModelInferenceIntegrationApi(configuration);

const params: v2.OpenAIModelInferenceIntegrationApiCreateOpenAIModelInferenceIntegrationAccountRequest =
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
          name: "openai-model-inference-acme",
          settings: {
            customTags: "team:ai,env:prod",
          },
        },
        type: "integration-account",
      },
    },
  };

apiInstance
  .createOpenAIModelInferenceIntegrationAccount(params)
  .then((data: v2.OpenAIModelInferenceIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
