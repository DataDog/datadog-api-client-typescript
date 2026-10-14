/**
 * List feature flags filters disabled production status
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
const FEATURE_FLAG_LIST_A_DATA_ID = process.env
  .FEATURE_FLAG_LIST_A_DATA_ID as string;

// there is a valid "feature_flag_list_b" in the system
const FEATURE_FLAG_LIST_B_DATA_ID = process.env
  .FEATURE_FLAG_LIST_B_DATA_ID as string;

const params: v2.FeatureFlagsApiListFeatureFlagsRequest = {
  productionStatus: ["DISABLED"],
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
