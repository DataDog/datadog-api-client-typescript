/**
 * Get a rum-based metric returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumMetricsApi(configuration);

// there is a valid "rum_metric" in the system
const RUM_METRIC_DATA_ID = process.env.RUM_METRIC_DATA_ID as string;

const params: v2.RumMetricsApiGetRumMetricRequest = {
  metricId: RUM_METRIC_DATA_ID,
};

apiInstance
  .getRumMetric(params)
  .then((data: v2.RumMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
