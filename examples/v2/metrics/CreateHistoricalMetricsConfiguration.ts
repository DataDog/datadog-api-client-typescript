/**
 * Enable historical metrics ingestion returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createHistoricalMetricsConfiguration"] =
  true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiCreateHistoricalMetricsConfigurationRequest = {
  body: {
    data: {
      id: "dd.test.metric",
      type: "historical_metrics_configurations",
    },
  },
};

apiInstance
  .createHistoricalMetricsConfiguration(params)
  .then((data: v2.HistoricalMetricsConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
