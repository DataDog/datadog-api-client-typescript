/**
 * Create an environment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiCreateFeatureFlagsEnvironmentRequest = {
  body: {
    data: {
      type: "environments",
      attributes: {
        name: "Test Environment Example-Feature-Flag",
        queries: ["test-Example-Feature-Flag", "env-Example-Feature-Flag"],
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
