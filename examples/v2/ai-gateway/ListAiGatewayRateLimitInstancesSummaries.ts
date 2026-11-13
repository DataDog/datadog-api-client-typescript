/**
 * List AI Gateway rate limit counter summaries returns "OK" response
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
  "v2.listAiGatewayRateLimitInstancesSummaries"
] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

apiInstance
  .listAiGatewayRateLimitInstancesSummaries()
  .then((data: v2.AiGatewayRateLimitInstancesSummaryListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
