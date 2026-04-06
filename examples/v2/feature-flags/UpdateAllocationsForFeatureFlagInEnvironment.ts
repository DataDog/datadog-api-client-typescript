/**
 * Update targeting rules for a flag returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiUpdateAllocationsForFeatureFlagInEnvironmentRequest =
  {
    body: {
      data: [
        {
          attributes: {
            experimentId: "550e8400-e29b-41d4-a716-446655440030",
            exposureSchedule: {
              absoluteStartTime: new Date(2025, 6, 13, 12, 0, 0, 0),
              controlVariantId: "550e8400-e29b-41d4-a716-446655440012",
              controlVariantKey: "control",
              id: "550e8400-e29b-41d4-a716-446655440010",
              rolloutOptions: {
                autostart: false,
                selectionIntervalMs: 3600000,
                strategy: "UNIFORM_INTERVALS",
              },
              rolloutSteps: [
                {
                  exposureRatio: 0.5,
                  groupedStepIndex: 1,
                  id: "550e8400-e29b-41d4-a716-446655440040",
                  intervalMs: 3600000,
                  isPauseRecord: false,
                },
              ],
            },
            guardrailMetrics: [
              {
                metricId: "metric-error-rate",
                triggerAction: "PAUSE",
              },
            ],
            id: "550e8400-e29b-41d4-a716-446655440020",
            key: "prod-rollout",
            name: "Production Rollout",
            targetingRules: [
              {
                conditions: [
                  {
                    attribute: "user_tier",
                    operator: "ONE_OF",
                    value: ["premium", "enterprise"],
                  },
                ],
              },
            ],
            type: "FEATURE_GATE",
            variantWeights: [
              {
                value: 50,
                variantId: "550e8400-e29b-41d4-a716-446655440001",
                variantKey: "control",
              },
            ],
          },
          type: "allocations",
        },
      ],
    },
    featureFlagId: "550e8400-e29b-41d4-a716-446655440000",
    environmentId: "550e8400-e29b-41d4-a716-446655440001",
  };

apiInstance
  .updateAllocationsForFeatureFlagInEnvironment(params)
  .then((data: v2.ListAllocationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
