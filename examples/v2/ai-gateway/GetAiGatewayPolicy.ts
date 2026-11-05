/**
 * Get an AI Gateway routing policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getAiGatewayPolicy"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiGetAiGatewayPolicyRequest = {
  inbound: "inbound",
};

apiInstance
  .getAiGatewayPolicy(params)
  .then((data: v2.AiGatewayPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
