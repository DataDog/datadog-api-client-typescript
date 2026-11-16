/**
 * Set the approval requirement for a feature flag returns "OK" response
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

const params: v2.FeatureFlagsApiUpdateFeatureFlagApprovalsRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
      },
      type: "feature-flag-approvals",
    },
  },
  featureFlagId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .updateFeatureFlagApprovals(params)
  .then((data: v2.FeatureFlagResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
