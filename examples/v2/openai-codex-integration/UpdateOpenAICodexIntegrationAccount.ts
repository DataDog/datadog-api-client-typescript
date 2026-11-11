/**
 * Update an OpenAI Codex integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateOpenAICodexIntegrationAccount"] =
  true;
const apiInstance = new v2.OpenAICodexIntegrationApi(configuration);

const params: v2.OpenAICodexIntegrationApiUpdateOpenAICodexIntegrationAccountRequest =
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
        id: "7d2f9c4e-3a1b-4c8e-9f6d-2b5a8e1c0d47",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateOpenAICodexIntegrationAccount(params)
  .then((data: v2.OpenAICodexIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
