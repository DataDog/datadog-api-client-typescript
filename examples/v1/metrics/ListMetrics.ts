/**
 * Search metrics returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

const params: v1.MetricsApiListMetricsRequest = {
  q: "q",
};

apiInstance
  .listMetrics(params)
  .then((data: v1.MetricSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
