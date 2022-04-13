/**
 * Query timeseries points returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

const params: v1.MetricsApiQueryMetricsRequest = {
  from: new Date(new Date().getTime() / 1000 + -1 * 86400).getTime() / 1000,
  to: new Date().getTime() / 1000,
  query: "system.cpu.idle{*}",
};

apiInstance
  .queryMetrics(params)
  .then((data: v1.MetricsQueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
