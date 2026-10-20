/**
 * Patch a saved filter accepts the current timestamp for rules
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
      attributes: {
        lastUpdatedAt: new Date(2026, 10, 16, 20, 20, 30, 0),
        targetingRules: [
          {
            conditions: [
              {
                attribute: "user_id",
                operator: "ONE_OF",
                value: ["test-user-2"],
              },
            ],
          },
        ],
      },
      type: "saved-filters",
    },
  },
  savedFilterId: "a8c393b4-3a9c-48fd-aa48-402c97e8d9c9",
};

apiInstance
  .updateSavedFilterAttributes(params)
  .then((data: v2.SavedFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
