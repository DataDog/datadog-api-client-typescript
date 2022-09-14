/**
 * Query timeseries points returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

const params: v1.MetricsApiQueryMetricsRequest = {
  from: Math.round(
    new Date(new Date().getTime() + -1 * 86400 * 1000).getTime() / 1000
  ),
  to: Math.round(new Date().getTime() / 1000),
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
