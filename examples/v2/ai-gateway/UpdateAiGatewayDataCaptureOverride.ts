/**
 * Replace an AI Gateway data capture override returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateAiGatewayDataCaptureOverride"] =
  true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpdateAiGatewayDataCaptureOverrideRequest = {
  body: {
    data: {
      attributes: {
        configurationRevision: "capture-revision-1",
        metadataCapture: ["tool_usage", "tool_output_size", "tool_names"],
        mode: "metadata_only",
        name: "Research",
        operation: "create",
        revision: 1,
        scope: {
          tags: {
            env: "prod",
          },
        },
      },
      id: "11111111-1111-4111-8111-111111111111",
      type: "data-capture-overrides",
    },
  },
  id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateAiGatewayDataCaptureOverride(params)
  .then((data: v2.AiGatewayCaptureOverrideResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
