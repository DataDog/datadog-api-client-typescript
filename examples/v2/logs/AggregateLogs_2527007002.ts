/**
 * Aggregate compute events returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params: v2.LogsApiAggregateLogsRequest = {
  body: {
    compute: [
      {
        aggregation: "count",
        interval: "5m",
        type: "timeseries",
      },
    ],
    filter: {
      from: "now-15m",
      indexes: ["main"],
      query: "*",
      to: "now",
    },
  },
};

apiInstance
  .aggregateLogs(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
