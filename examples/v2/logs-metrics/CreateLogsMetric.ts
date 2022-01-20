/**
 * Create a log-based metric returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

let params: v2.LogsMetricsApiCreateLogsMetricRequest = {
  body: {
    data: {
      id: "Test-Example-Create_a_log_based_metric_returns_OK_response",
      type: "logs_metrics",
      attributes: {
        compute: {
          aggregationType: "count",
        },
      },
    },
  },
};

apiInstance
  .createLogsMetric(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
