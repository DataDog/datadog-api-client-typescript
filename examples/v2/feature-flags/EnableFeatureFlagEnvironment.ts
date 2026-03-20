/**
 * Enable a feature flag in an environment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

// there is a valid "feature_flag" in the system
const FEATURE_FLAG_DATA_ID = process.env.FEATURE_FLAG_DATA_ID as string;

// there is a valid "environment" in the system
const ENVIRONMENT_DATA_ID = process.env.ENVIRONMENT_DATA_ID as string;

const params: v2.FeatureFlagsApiEnableFeatureFlagEnvironmentRequest = {
  featureFlagId: FEATURE_FLAG_DATA_ID,
  environmentId: ENVIRONMENT_DATA_ID,
};

apiInstance
  .enableFeatureFlagEnvironment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
