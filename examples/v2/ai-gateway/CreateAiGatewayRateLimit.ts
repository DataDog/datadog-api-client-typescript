/**
 * Create an AI Gateway rate limit returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createAiGatewayRateLimit"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiCreateAiGatewayRateLimitRequest = {
  body: {
    data: {
      attributes: {
        costMicrocentsPerMinute: 100000000,
        inputTokensPerMinute: undefined,
        mode: "ALERT",
        name: "Default rate limit",
        outputTokensPerMinute: undefined,
        requestsPerMinute: 600,
        selector: [
          {
            dim: "user_id",
            perValue: true,
            values: ["11111111-1111-1111-1111-111111111111"],
          },
        ],
        teamId: "00000000-0000-4000-8000-000000000002",
        userId: "00000000-0000-4000-8000-000000000001",
      },
      type: "rate-limits",
    },
  },
};

apiInstance
  .createAiGatewayRateLimit(params)
  .then((data: v2.AiGatewayRateLimitResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
