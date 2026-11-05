/**
 * Get the AI Gateway data capture configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getAiGatewayDataCaptureConfiguration"] =
  true;
const apiInstance = new v2.AIGatewayApi(configuration);

apiInstance
  .getAiGatewayDataCaptureConfiguration()
  .then((data: v2.AiGatewayCaptureConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
