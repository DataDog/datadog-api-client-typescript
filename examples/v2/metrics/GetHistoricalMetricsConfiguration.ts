/**
 * Get a historical metrics configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getHistoricalMetricsConfiguration"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiGetHistoricalMetricsConfigurationRequest = {
  metricName: "metric_name",
};

apiInstance
  .getHistoricalMetricsConfiguration(params)
  .then((data: v2.HistoricalMetricsConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
