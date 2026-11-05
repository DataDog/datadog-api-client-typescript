/**
 * Create or replace an AI Gateway routing policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.upsertAiGatewayPolicy"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpsertAiGatewayPolicyRequest = {
  body: {
    data: {
      attributes: {
        inbound: "coding-agent",
        priority: 1,
        tiers: [
          {
            priority: 1,
            targets: [
              {
                id: 901,
                model: "gpt-5.2-codex",
                provider: "prod-us",
              },
            ],
          },
        ],
      },
      type: "routing-documents",
    },
  },
};

apiInstance
  .upsertAiGatewayPolicy(params)
  .then((data: v2.AiGatewayPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
