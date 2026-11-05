/**
 * List AI Gateway rate limits returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listAiGatewayRateLimits"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

apiInstance
  .listAiGatewayRateLimits()
  .then((data: v2.AiGatewayRateLimitListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
