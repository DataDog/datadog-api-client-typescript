/**
 * Aggregate compute events with group by returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

const params: v2.LogsApiAggregateLogsRequest = {
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
    groupBy: [
      {
        facet: "host",
        missing: "miss",
        sort: {
          type: "measure",
          order: "asc",
          aggregation: "pc90",
          metric: "@duration",
        },
      },
    ],
  },
};

apiInstance
  .aggregateLogs(params)
  .then((data: v2.LogsAggregateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
