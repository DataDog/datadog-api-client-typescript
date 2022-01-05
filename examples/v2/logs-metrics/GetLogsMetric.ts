/**
 * Get a log-based metric returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

// there is a valid "logs_metric" in the system
let LOGS_METRIC_DATA_ID = process.env.LOGS_METRIC_DATA_ID as string;



let params: v2.LogsMetricsApiGetLogsMetricRequest = {
  metricId: LOGS_METRIC_DATA_ID,

};

apiInstance
  .getLogsMetric(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));