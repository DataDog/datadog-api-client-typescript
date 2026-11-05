/**
 * Add a model to an AI Gateway provider returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createAiGatewayModel"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiCreateAiGatewayModelRequest = {
  body: {
    data: {
      attributes: {
        modelIdCanonical: "gpt-5.2-codex",
        modelIdWire: "gpt-5.2-codex-20260801",
        supportedOperations: ["OPENAI_CHAT_COMPLETIONS"],
      },
      type: "model-catalog-entries",
    },
  },
  providerId: 9223372036854775807,
};

apiInstance
  .createAiGatewayModel(params)
  .then((data: v2.AiGatewayModelCatalogEntryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
