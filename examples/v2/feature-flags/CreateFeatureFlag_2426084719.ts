/**
 * Create a feature flag with notification rule targets returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiCreateFeatureFlagRequest = {
  body: {
    data: {
      type: "feature-flags",
      attributes: {
        defaultVariantKey: "variant-Example-Feature-Flag-1",
        description:
          "Test feature flag with notification rule targets for BDD scenarios",
        key: "test-feature-flag-notify-Example-Feature-Flag",
        name: "Test Feature Flag Notify Example-Feature-Flag",
        valueType: "BOOLEAN",
        variants: [
          {
            key: "variant-Example-Feature-Flag-1",
            name: "Variant Example-Feature-Flag A",
            value: "true",
          },
          {
            key: "variant-Example-Feature-Flag-2",
            name: "Variant Example-Feature-Flag B",
            value: "false",
          },
        ],
        notificationRuleQuery: "notification_type:rollout_started",
        ruleTargets: [
          {
            type: "SLACK_CHANNEL",
            version: 1,
            configuration: {
              channel: "#feature-flags-test",
              workspace: "datadoghq",
            },
          },
        ],
      },
    },
  },
};

apiInstance
  .createFeatureFlag(params)
  .then((data: v2.FeatureFlagResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
