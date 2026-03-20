/**
 * Get an environment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

// there is a valid "environment" in the system
const ENVIRONMENT_DATA_ID = process.env.ENVIRONMENT_DATA_ID as string;

const params: v2.FeatureFlagsApiGetFeatureFlagsEnvironmentRequest = {
  environmentId: ENVIRONMENT_DATA_ID,
};

apiInstance
  .getFeatureFlagsEnvironment(params)
  .then((data: v2.EnvironmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
