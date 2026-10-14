/**
 * List feature flags combines exact keys tags search types creators and IDs
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

// there is a valid "feature_flag_list_a" in the system
const FEATURE_FLAG_LIST_A_DATA_ATTRIBUTES_CREATED_BY = process.env
  .FEATURE_FLAG_LIST_A_DATA_ATTRIBUTES_CREATED_BY as string;
const FEATURE_FLAG_LIST_A_DATA_ID = process.env
  .FEATURE_FLAG_LIST_A_DATA_ID as string;

// there is a valid "feature_flag_list_b" in the system
const FEATURE_FLAG_LIST_B_DATA_ID = process.env
  .FEATURE_FLAG_LIST_B_DATA_ID as string;

const params: v2.FeatureFlagsApiListFeatureFlagsRequest = {
  key: "list-a-example-feature-flag",
  isArchived: false,
  tags: ["list-test:example-feature-flag", "color:blue"],
  search: "LIST-A-example-feature-flag",
  valueType: ["BOOLEAN", "STRING"],
  createdBy: [FEATURE_FLAG_LIST_A_DATA_ATTRIBUTES_CREATED_BY],
  flagIds: [FEATURE_FLAG_LIST_A_DATA_ID, FEATURE_FLAG_LIST_B_DATA_ID],
};

apiInstance
  .listFeatureFlags(params)
  .then((data: v2.ListFeatureFlagsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
