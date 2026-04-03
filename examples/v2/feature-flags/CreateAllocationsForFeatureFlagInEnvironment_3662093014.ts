/**
 * Create allocation for a flag in an environment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

// there is a valid "feature_flag" in the system
const FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID = process.env
  .FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID as string;
const FEATURE_FLAG_DATA_ID = process.env.FEATURE_FLAG_DATA_ID as string;

// there is a valid "environment" in the system
const ENVIRONMENT_DATA_ID = process.env.ENVIRONMENT_DATA_ID as string;

const params: v2.FeatureFlagsApiCreateAllocationsForFeatureFlagInEnvironmentRequest =
  {
    body: {
      data: {
        type: "allocations",
        attributes: {
          name: "New targeting rule Example-Feature-Flag",
          key: "new-targeting-rule-example-feature-flag",
          targetingRules: [],
          variantWeights: [
            {
              variantId: FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID,
              value: 100,
            },
          ],
          guardrailMetrics: [],
          type: "CANARY",
        },
      },
    },
    featureFlagId: FEATURE_FLAG_DATA_ID,
    environmentId: ENVIRONMENT_DATA_ID,
  };

apiInstance
  .createAllocationsForFeatureFlagInEnvironment(params)
  .then((data: v2.AllocationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
