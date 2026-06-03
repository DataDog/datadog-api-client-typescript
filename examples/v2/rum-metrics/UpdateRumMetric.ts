/**
 * Update a rum-based metric returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumMetricsApi(configuration);

// there is a valid "rum_metric" in the system
const RUM_METRIC_DATA_ID = process.env.RUM_METRIC_DATA_ID as string;

const params: v2.RumMetricsApiUpdateRumMetricRequest = {
  body: {
    data: {
      id: RUM_METRIC_DATA_ID,
      type: "rum_metrics",
      attributes: {
        compute: {
          includePercentiles: false,
        },
        filter: {
          query: "@service:rum-config",
        },
        groupBy: [
          {
            path: "@browser.version",
            tagName: "browser_version",
          },
        ],
      },
    },
  },
  metricId: RUM_METRIC_DATA_ID,
};

apiInstance
  .updateRumMetric(params)
  .then((data: v2.RumMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
