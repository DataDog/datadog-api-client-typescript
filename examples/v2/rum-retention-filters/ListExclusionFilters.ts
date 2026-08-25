/**
 * Get all RUM exclusion filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listExclusionFilters"] = true;
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiListExclusionFiltersRequest = {
  appId: "app_id",
};

apiInstance
  .listExclusionFilters(params)
  .then((data: v2.RumExclusionFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
