/**
 * Conclude experiment returns "The experiment was concluded and the winning variant was rolled out to its linked feature
 * flag allocation." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

const params: v2.ExperimentsApiConcludeExperimentRequest = {
  body: {
    data: {
      attributes: {
        decisionVariantKey: "treatment",
      },
      type: "conclude-experiment-request",
    },
  },
  experimentId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .concludeExperiment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
