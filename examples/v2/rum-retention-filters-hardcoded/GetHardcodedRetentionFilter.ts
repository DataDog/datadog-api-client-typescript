/**
 * Get a hardcoded retention filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRetentionFiltersHardcodedApi(configuration);

const params: v2.RUMRetentionFiltersHardcodedApiGetHardcodedRetentionFilterRequest =
  {
    appId: "Example-RUM-Retention-Filters-Hardcoded",
    rfId: "Example-RUM-Retention-Filters-Hardcoded",
  };

apiInstance
  .getHardcodedRetentionFilter(params)
  .then((data: v2.RumHardcodedRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
