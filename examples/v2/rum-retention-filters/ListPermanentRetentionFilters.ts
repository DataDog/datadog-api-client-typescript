/**
 * Get all permanent RUM retention filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiListPermanentRetentionFiltersRequest = {
  appId: "app_id",
};

apiInstance
  .listPermanentRetentionFilters(params)
  .then((data: v2.RumPermanentRetentionFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
