/**
 * Update an environment to enable full evaluation data returns "OK" response
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

// there is a valid "environment" in the system
const ENVIRONMENT_DATA_ID = process.env.ENVIRONMENT_DATA_ID as string;

const params: v2.FeatureFlagsApiUpdateFeatureFlagsEnvironmentRequest = {
  body: {
    data: {
      type: "environments",
      attributes: {
        name: "Updated Privacy Example-Feature-Flag",
        queries: ["updated-privacy-example-feature-flag"],
        observeFullEvaluationData: true,
      },
    },
  },
  environmentId: ENVIRONMENT_DATA_ID,
};

apiInstance
  .updateFeatureFlagsEnvironment(params)
  .then((data: v2.EnvironmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
