/**
 * Update an AI Gateway provider returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateAiGatewayProvider"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpdateAiGatewayProviderRequest = {
  body: {
    data: {
      attributes: {
        costMultiplier: 1.0,
        name: "production-us-v2",
      },
      id: "42",
      type: "providers",
    },
  },
  id: 9223372036854775807,
};

apiInstance
  .updateAiGatewayProvider(params)
  .then((data: v2.AiGatewayProviderResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
