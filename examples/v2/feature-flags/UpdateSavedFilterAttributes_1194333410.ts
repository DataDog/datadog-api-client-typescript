/**
 * Patch a saved filter updates metadata and rules together
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

const params: v2.FeatureFlagsApiUpdateSavedFilterAttributesRequest = {
  body: {
    data: {
      type: "saved-filters",
      attributes: {
        name: "patchSavedFilterTest-combined-157e7ff3",
        description: "Combined synthetic test update.",
        targetingRules: [
          {
            conditions: [
              {
                operator: "ONE_OF",
                attribute: "org_id",
                value: ["test-org-1"],
              },
            ],
          },
        ],
      },
    },
  },
  savedFilterId: "2cfc7949-7eb4-4d76-b1b8-d1aa9b565535",
};

apiInstance
  .updateSavedFilterAttributes(params)
  .then((data: v2.SavedFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
