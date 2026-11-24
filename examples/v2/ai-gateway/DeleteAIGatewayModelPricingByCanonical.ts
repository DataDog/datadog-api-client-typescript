/**
 * Delete a model pricing override by canonical ID returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteAIGatewayModelPricingByCanonical"] =
  true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiDeleteAIGatewayModelPricingByCanonicalRequest = {
  providerId: 9223372036854775807,
  canonical: "canonical",
};

apiInstance
  .deleteAIGatewayModelPricingByCanonical(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
