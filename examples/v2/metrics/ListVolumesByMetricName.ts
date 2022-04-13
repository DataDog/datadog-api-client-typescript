/**
 * List distinct metric volumes by metric name returns "Success" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListVolumesByMetricNameRequest = {
  metricName:
    "ExampleListdistinctmetricvolumesbymetricnamereturnsSuccessresponse",
};

apiInstance
  .listVolumesByMetricName(params)
  .then((data: v2.MetricVolumesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
