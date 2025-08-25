/**
 * Get all RUM retention filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiListRetentionFiltersRequest = {
  appId: "1d4b9c34-7ac4-423a-91cf-9902d926e9b3",
};

apiInstance
  .listRetentionFilters(params)
  .then((data: v2.RumRetentionFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
