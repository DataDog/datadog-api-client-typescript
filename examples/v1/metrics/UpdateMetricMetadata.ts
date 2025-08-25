/**
 * Edit metric metadata returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

const params: v1.MetricsApiUpdateMetricMetadataRequest = {
  body: {
    perUnit: "second",
    type: "count",
    unit: "byte",
  },
  metricName: "metric_name",
};

apiInstance
  .updateMetricMetadata(params)
  .then((data: v1.MetricMetadata) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
