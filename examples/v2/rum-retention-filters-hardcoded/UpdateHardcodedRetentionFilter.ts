/**
 * Update a hardcoded retention filter returns "Updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRetentionFiltersHardcodedApi(configuration);

const params: v2.RUMRetentionFiltersHardcodedApiUpdateHardcodedRetentionFilterRequest =
  {
    body: {
      data: {
        id: "REPLACE.ME",
        type: "hardcoded_retention_filters",
        attributes: {
          crossProductSampling: {
            sessionReplaySampleRate: 50.0,
            sessionReplayEnabled: true,
          },
        },
      },
    },
    appId: "Example-RUM-Retention-Filters-Hardcoded",
    rfId: "Example-RUM-Retention-Filters-Hardcoded",
  };

apiInstance
  .updateHardcodedRetentionFilter(params)
  .then((data: v2.RumHardcodedRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
