/**
 * Create a flag suggestion returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiCreateFlagSuggestionRequest = {
  body: {
    data: {
      attributes: {
        action: "archived",
        comment: "Archive this deprecated flag",
        environmentId: "550e8400-e29b-41d4-a716-446655440001",
        notificationRuleTargets: ["user@example.com"],
        property: "FLAG",
        suggestion: "ENABLED",
        suggestionMetadata: {
          variantId: "550e8400-e29b-41d4-a716-446655440005",
        },
      },
      type: "flag-suggestions",
    },
  },
  featureFlagId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .createFlagSuggestion(params)
  .then((data: v2.FlagSuggestionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
