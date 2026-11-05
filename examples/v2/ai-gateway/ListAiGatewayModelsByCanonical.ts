/**
 * List AI Gateway models by canonical ID returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listAiGatewayModelsByCanonical"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

apiInstance
  .listAiGatewayModelsByCanonical()
  .then((data: v2.AiGatewayModelsByCanonicalListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
