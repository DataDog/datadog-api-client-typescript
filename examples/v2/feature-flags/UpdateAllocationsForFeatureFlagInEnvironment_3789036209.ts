/**
 * Update targeting rules for a flag in an environment returns "OK" response
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

const params: v2.FeatureFlagsApiUpdateAllocationsForFeatureFlagInEnvironmentRequest =
  {
    body: {
      data: [
        {
          type: "allocations",
          attributes: {
            key: "overwrite-allocation-example-feature-flag",
            name: "New targeting rule Example-Feature-Flag",
            targetingRules: [],
            variantWeights: [
              {
                variantId: FEATURE_FLAG_DATA_ATTRIBUTES_VARIANTS_0_ID,
                value: 100,
              },
            ],
            exposureSchedule: {
              rolloutOptions: {
                strategy: "UNIFORM_INTERVALS",
                autostart: false,
                selectionIntervalMs: 86400000,
              },
              rolloutSteps: [
                {
                  exposureRatio: 0.05,
                  intervalMs: undefined,
                  isPauseRecord: false,
                  groupedStepIndex: 0,
                },
                {
                  exposureRatio: 0.25,
                  intervalMs: undefined,
                  isPauseRecord: false,
                  groupedStepIndex: 1,
                },
                {
                  exposureRatio: 1,
                  intervalMs: undefined,
                  isPauseRecord: false,
                  groupedStepIndex: 2,
                },
              ],
            },
            guardrailMetrics: [],
            type: "CANARY",
          },
        },
      ],
    },
    featureFlagId: FEATURE_FLAG_DATA_ID,
    environmentId: ENVIRONMENT_DATA_ID,
  };

apiInstance
  .updateAllocationsForFeatureFlagInEnvironment(params)
  .then((data: v2.ListAllocationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
