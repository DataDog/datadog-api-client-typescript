/**
 * Delete a RUM exclusion filter returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

// there is a valid "rum_exclusion_filter" in the system
const RUM_EXCLUSION_FILTER_DATA_ID = process.env
  .RUM_EXCLUSION_FILTER_DATA_ID as string;

const params: v2.RumRetentionFiltersApiDeleteExclusionFilterRequest = {
  appId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
  efId: RUM_EXCLUSION_FILTER_DATA_ID,
};

apiInstance
  .deleteExclusionFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
