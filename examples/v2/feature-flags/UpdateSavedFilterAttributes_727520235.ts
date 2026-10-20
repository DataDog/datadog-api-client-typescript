/**
 * Patch a saved filter replaces the rules of a saved list
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
        targetingRules: [
          {
            conditions: [
              {
                operator: "ONE_OF",
                attribute: "user_id",
                value: ["test-user-3"],
              },
            ],
          },
        ],
      },
    },
  },
  savedFilterId: "d8e3a81b-1505-4600-99c6-c563d01d46b1",
};

apiInstance
  .updateSavedFilterAttributes(params)
  .then((data: v2.SavedFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
