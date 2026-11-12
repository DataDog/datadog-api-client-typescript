/**
 * Create an OpenAI Codex integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createOpenAICodexIntegrationAccount"] =
  true;
const apiInstance = new v2.OpenAICodexIntegrationApi(configuration);

const params: v2.OpenAICodexIntegrationApiCreateOpenAICodexIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "bearer_token",
            token: "your-token",
          },
          dataflows: {
            openaiCodexDora: {
              enabled: true,
            },
            openaiCodexTurnMetrics: {
              enabled: true,
            },
          },
          name: "openai-codex-acme",
          settings: {
            codexWorkspaceId: "your-workspace-id",
          },
        },
        type: "integration-account",
      },
    },
  };

apiInstance
  .createOpenAICodexIntegrationAccount(params)
  .then((data: v2.OpenAICodexIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
