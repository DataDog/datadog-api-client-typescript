/**
 * Delete a variant returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiDeleteVariantFromFeatureFlagRequest = {
  featureFlagId: "550e8400-e29b-41d4-a716-446655440000",
  variantId: "550e8400-e29b-41d4-a716-446655440002",
};

apiInstance
  .deleteVariantFromFeatureFlag(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
