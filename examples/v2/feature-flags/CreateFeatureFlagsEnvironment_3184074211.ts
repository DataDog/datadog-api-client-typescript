/**
 * Create an environment with full evaluation data false returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiCreateFeatureFlagsEnvironmentRequest = {
  body: {
    data: {
      type: "environments",
      attributes: {
        name: "Evaluation Privacy Example-Feature-Flag",
        queries: ["privacy-example-feature-flag"],
        observeFullEvaluationData: false,
      },
    },
  },
};

apiInstance
  .createFeatureFlagsEnvironment(params)
  .then((data: v2.EnvironmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
