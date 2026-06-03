/**
 * Get all hardcoded retention filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRetentionFiltersHardcodedApi(configuration);

const params: v2.RUMRetentionFiltersHardcodedApiListHardcodedRetentionFiltersRequest =
  {
    appId: "Example-RUM-Retention-Filters-Hardcoded",
  };

apiInstance
  .listHardcodedRetentionFilters(params)
  .then((data: v2.RumHardcodedRetentionFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
