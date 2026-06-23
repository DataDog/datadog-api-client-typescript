/**
 * Add a variant to a feature flag returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiCreateVariantForFeatureFlagRequest = {
  body: {
    key: "variant-abc123",
    name: "Variant ABC123",
    value: "true",
  },
  featureFlagId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .createVariantForFeatureFlag(params)
  .then((data: v2.Variant) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
