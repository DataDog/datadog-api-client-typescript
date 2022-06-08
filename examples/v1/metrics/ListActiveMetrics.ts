/**
 * Get active metrics list returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

const params: v1.MetricsApiListActiveMetricsRequest = {
  from: 9223372036854775807,
};

apiInstance
  .listActiveMetrics(params)
  .then((data: v1.MetricsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
