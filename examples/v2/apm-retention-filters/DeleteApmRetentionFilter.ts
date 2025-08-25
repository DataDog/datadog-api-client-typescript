/**
 * Delete a retention filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.APMRetentionFiltersApi(configuration);

// there is a valid "retention_filter" in the system
const RETENTION_FILTER_DATA_ID = process.env.RETENTION_FILTER_DATA_ID as string;

const params: v2.APMRetentionFiltersApiDeleteApmRetentionFilterRequest = {
  filterId: RETENTION_FILTER_DATA_ID,
};

apiInstance
  .deleteApmRetentionFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
