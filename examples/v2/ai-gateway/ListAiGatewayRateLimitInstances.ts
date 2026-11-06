/**
 * List AI Gateway rate limit counters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listAiGatewayRateLimitInstances"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiListAiGatewayRateLimitInstancesRequest = {
  id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .listAiGatewayRateLimitInstances(params)
  .then((data: v2.AiGatewayRateLimitInstanceListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
