/**
 * Create a flag change suggestion returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.FeatureFlagsApi(configuration);

const params: v2.FeatureFlagsApiCreateFlagSuggestionRequest = {
  body: {
    data: {
      attributes: {
        action: "updated",
        comment: "Restrict this flag to server applications.",
        environmentId: "550e8400-e29b-41d4-a716-446655440001",
        notificationRuleTargets: ["requester@example.com"],
        property: "DISTRIBUTION_CHANNEL",
        suggestion: "SERVER",
        suggestionMetadata: {
          variantId: "550e8400-e29b-41d4-a716-446655440002",
        },
      },
      type: "flag-suggestions",
    },
  },
  featureFlagId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .createFlagSuggestion(params)
  .then((data: v2.FeatureFlagSuggestionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
