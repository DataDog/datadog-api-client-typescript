/**
 * Update a log-based metric with include_percentiles field returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

// there is a valid "logs_metric_percentile" in the system
const LOGS_METRIC_PERCENTILE_DATA_ID = process.env
  .LOGS_METRIC_PERCENTILE_DATA_ID as string;

const params: v2.LogsMetricsApiUpdateLogsMetricRequest = {
  body: {
    data: {
      type: "logs_metrics",
      attributes: {
        compute: {
          includePercentiles: false,
        },
      },
    },
  },
  metricId: LOGS_METRIC_PERCENTILE_DATA_ID,
};

apiInstance
  .updateLogsMetric(params)
  .then((data: v2.LogsMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
