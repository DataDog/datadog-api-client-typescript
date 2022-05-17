/**
 * Estimate Output Series - Public v2 API returns "Success" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiEstimateMetricsOutputSeriesRequest = {
  metricName: "system.cpu.idle",
  filterGroups: "app,host",
  filterNumAggregations: 4,
};

apiInstance
  .estimateMetricsOutputSeries(params)
  .then((data: v2.MetricEstimateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
