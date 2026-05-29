/**
 * Get a permanent RUM retention filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiGetPermanentRetentionFilterRequest = {
  appId: "app_id",
  permanentRfId: "synthetics_sessions",
};

apiInstance
  .getPermanentRetentionFilter(params)
  .then((data: v2.RumPermanentRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
