/**
 * Update a variant returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiUpdateVariantForFeatureFlagRequest = {
  body: {
    name: "Variant ABC123 Updated",
    value: "new_value",
  },
  featureFlagId: "550e8400-e29b-41d4-a716-446655440000",
  variantId: "550e8400-e29b-41d4-a716-446655440002",
};

apiInstance
  .updateVariantForFeatureFlag(params)
  .then((data: v2.Variant) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
