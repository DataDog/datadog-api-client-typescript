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
configuration.unstableOperations["v2.deleteExclusionFilter"] = true;
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiDeleteExclusionFilterRequest = {
  appId: "app_id",
  efId: "ef_id",
};

apiInstance
  .deleteExclusionFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
