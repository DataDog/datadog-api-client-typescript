/**
 * Create a log-based metric returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

const params: v2.LogsMetricsApiCreateLogsMetricRequest = {
  body: {
    data: {
      id: "ExampleLogsMetric",
      type: "logs_metrics",
      attributes: {
        compute: {
          aggregationType: "distribution",
          includePercentiles: true,
          path: "@duration",
        },
      },
    },
  },
};

apiInstance
  .createLogsMetric(params)
  .then((data: v2.LogsMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
