/**
 * Delete an AI Gateway data capture override returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteAiGatewayDataCaptureOverride"] =
  true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiDeleteAiGatewayDataCaptureOverrideRequest = {
  body: {
    data: {
      attributes: {
        configurationRevision: "capture-revision-1",
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
  .deleteAiGatewayDataCaptureOverride(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
