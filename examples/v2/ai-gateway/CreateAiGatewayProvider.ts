/**
 * Create an AI Gateway provider returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createAiGatewayProvider"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiCreateAiGatewayProviderRequest = {
  body: {
    data: {
      attributes: {
        costMultiplier: 1.0,
        initialBindings: [
          {
            principals: ["org:11111111-1111-1111-1111-111111111111"],
            relation: "viewer",
          },
        ],
        integrationAccountId: "account-123",
        integrationConfig: {
          bedrockRegion: "us-east-1",
          foundryProject: "my-project",
          foundryResourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/ai/providers/Microsoft.CognitiveServices/accounts/my-foundry",
          location: "us-central1",
          projectId: "my-gcp-project",
          supportedOperations: ["OPENAI_CHAT_COMPLETIONS"],
        },
        knownProvider: "openai",
        models: [
          {
            modelIdCanonical: "gpt-5.2-codex",
            modelIdWire: "gpt-5.2-codex-20260801",
            supportedOperations: ["OPENAI_CHAT_COMPLETIONS"],
          },
        ],
        name: "production-us",
        slug: "prod-us",
      },
      type: "providers",
    },
  },
};

apiInstance
  .createAiGatewayProvider(params)
  .then((data: v2.AiGatewayProviderResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
