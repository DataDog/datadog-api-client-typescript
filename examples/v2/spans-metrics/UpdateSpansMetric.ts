/**
 * Update a span-based metric returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SpansMetricsApi(configuration);

// there is a valid "spans_metric" in the system
const SPANS_METRIC_DATA_ID = process.env.SPANS_METRIC_DATA_ID as string;

const params: v2.SpansMetricsApiUpdateSpansMetricRequest = {
  body: {
    data: {
      attributes: {
        compute: {
          includePercentiles: false,
        },
        filter: {
          query: "@http.status_code:200 service:my-service-updated",
        },
        groupBy: [
          {
            path: "resource_name",
            tagName: "resource_name",
          },
        ],
      },
      type: "spans_metrics",
    },
  },
  metricId: SPANS_METRIC_DATA_ID,
};

apiInstance
  .updateSpansMetric(params)
  .then((data: v2.SpansMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
