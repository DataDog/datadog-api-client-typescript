/**
 * Get a model pricing override returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getAiGatewayModelPricing"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiGetAiGatewayModelPricingRequest = {
  providerId: 9223372036854775807,
  canonical: "canonical",
};

apiInstance
  .getAiGatewayModelPricing(params)
  .then((data: v2.AiGatewayModelPricingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
