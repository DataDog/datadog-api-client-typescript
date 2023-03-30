/**
 * Delete a span-based metric returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SpansMetricsApi(configuration);

// there is a valid "spans_metric" in the system
const SPANS_METRIC_DATA_ID = process.env.SPANS_METRIC_DATA_ID as string;

const params: v2.SpansMetricsApiDeleteSpansMetricRequest = {
  metricId: SPANS_METRIC_DATA_ID,
};

apiInstance
  .deleteSpansMetric(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
