/**
 * Get all permanent retention filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersPermanentApi(configuration);

const params: v2.RumRetentionFiltersPermanentApiListPermanentRetentionFiltersRequest =
  {
    appId: "1d4b9c34-7ac4-423a-91cf-9902d926e9b3",
  };

apiInstance
  .listPermanentRetentionFilters(params)
  .then((data: v2.RumPermanentRetentionFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
