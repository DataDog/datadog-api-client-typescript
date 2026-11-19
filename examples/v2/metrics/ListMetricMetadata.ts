/**
 * List metadata for multiple metrics returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listMetricMetadata"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListMetricMetadataRequest = {
  filterMetricName:
    "static_test_metric_donotdelete,static_test_metric_donotdelete,not.a.real.metric.examplemetric",
};

apiInstance
  .listMetricMetadata(params)
  .then((data: v2.MetricMetadataListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
