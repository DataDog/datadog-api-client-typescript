/**
 * Get all log-based metrics returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

apiInstance
  .listLogsMetrics()
  .then((data: v2.LogsMetricsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
