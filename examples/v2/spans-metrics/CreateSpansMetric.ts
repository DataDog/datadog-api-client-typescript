/**
 * Create a span-based metric returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SpansMetricsApi(configuration);

const params: v2.SpansMetricsApiCreateSpansMetricRequest = {
  body: {
    data: {
      attributes: {
        compute: {
          aggregationType: "distribution",
          includePercentiles: false,
          path: "@duration",
        },
        filter: {
          query: "@http.status_code:200 service:my-service",
        },
        groupBy: [
          {
            path: "resource_name",
            tagName: "resource_name",
          },
        ],
      },
      id: "ExampleSpansMetric",
      type: "spans_metrics",
    },
  },
};

apiInstance
  .createSpansMetric(params)
  .then((data: v2.SpansMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
