/**
 * Get a feature flag returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

// there is a valid "feature_flag" in the system
const FEATURE_FLAG_DATA_ID = process.env.FEATURE_FLAG_DATA_ID as string;

const params: v2.FeatureFlagsApiGetFeatureFlagRequest = {
  featureFlagId: FEATURE_FLAG_DATA_ID,
};

apiInstance
  .getFeatureFlag(params)
  .then((data: v2.FeatureFlagResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
