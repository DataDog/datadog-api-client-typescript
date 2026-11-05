/**
 * Update an AI Gateway rate limit returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateAiGatewayRateLimit"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpdateAiGatewayRateLimitRequest = {
  body: {
    data: {
      attributes: {
        inputTokensPerMinute: undefined,
        mode: "ALERT",
        outputTokensPerMinute: undefined,
        requestsPerMinute: undefined,
        tags: undefined,
        teamId: undefined,
        userId: undefined,
      },
      id: "11111111-1111-1111-1111-111111111111",
      type: "rate-limits",
    },
  },
  id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateAiGatewayRateLimit(params)
  .then((data: v2.AiGatewayRateLimitResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
