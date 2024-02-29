/**
 * Related Assets to a Metric returns "Success" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListMetricAssetsRequest = {
  metricName: "system.cpu.user",
};

apiInstance
  .listMetricAssets(params)
  .then((data: v2.MetricAssetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
