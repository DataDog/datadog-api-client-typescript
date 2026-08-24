/**
 * Get a RUM exclusion filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getExclusionFilter"] = true;
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiGetExclusionFilterRequest = {
  appId: "app_id",
  efId: "ef_id",
};

apiInstance
  .getExclusionFilter(params)
  .then((data: v2.RumExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
