/**
 * Get a RUM exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMRetentionFiltersApi(configuration);

const params: v2.RUMRetentionFiltersApiGetExclusionFilterRequest = {
  appId: "app_id",
  efId: "ef_id",
};

apiInstance
  .getExclusionFilter(params)
  .then((data: v2.RUMExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
