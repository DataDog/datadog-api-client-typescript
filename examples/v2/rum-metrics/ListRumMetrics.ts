/**
 * Get all rum-based metrics returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumMetricsApi(configuration);

apiInstance
  .listRumMetrics()
  .then((data: v2.RumMetricsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
