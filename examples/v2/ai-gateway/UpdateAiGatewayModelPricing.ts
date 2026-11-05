/**
 * Set a model pricing override returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateAiGatewayModelPricing"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpdateAiGatewayModelPricingRequest = {
  body: {
    data: {
      attributes: {
        pricingConfig: {
          rates: {
            cacheReadCostPerMtok: 0.0,
            cacheWriteCostPerMtok: 0.0,
            nonCachedInputCostPerMtok: 0.0,
            outputCostPerMtok: 0.0,
          },
          source: {
            type: "custom",
          },
          version: 1,
        },
      },
      id: "gpt-4o",
      type: "model-pricing",
    },
  },
  providerId: 9223372036854775807,
  canonical: "canonical",
};

apiInstance
  .updateAiGatewayModelPricing(params)
  .then((data: v2.AiGatewayModelPricingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
