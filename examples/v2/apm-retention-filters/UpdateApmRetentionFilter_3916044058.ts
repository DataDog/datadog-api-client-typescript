/**
 * Update a retention filter with trace rate returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.APMRetentionFiltersApi(configuration);

// there is a valid "retention_filter" in the system
const RETENTION_FILTER_DATA_ID = process.env.RETENTION_FILTER_DATA_ID as string;

const params: v2.APMRetentionFiltersApiUpdateApmRetentionFilterRequest = {
  body: {
    data: {
      attributes: {
        name: "test",
        rate: 0.9,
        traceRate: 1.0,
        filter: {
          query: "@_top_level:1 test:service-demo",
        },
        enabled: true,
        filterType: "spans-sampling-processor",
      },
      id: "test-id",
      type: "apm_retention_filter",
    },
  },
  filterId: RETENTION_FILTER_DATA_ID,
};

apiInstance
  .updateApmRetentionFilter(params)
  .then((data: v2.RetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
