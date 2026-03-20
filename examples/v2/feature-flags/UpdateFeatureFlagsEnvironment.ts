/**
 * Update an environment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

// there is a valid "environment" in the system
const ENVIRONMENT_DATA_ID = process.env.ENVIRONMENT_DATA_ID as string;

const params: v2.FeatureFlagsApiUpdateFeatureFlagsEnvironmentRequest = {
  body: {
    data: {
      type: "environments",
      attributes: {
        name: "Updated Test Environment Example-Feature-Flag",
        queries: ["updated-Example-Feature-Flag", "live-Example-Feature-Flag"],
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
