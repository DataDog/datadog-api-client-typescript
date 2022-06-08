/**
 * Aggregate events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

const params: v2.LogsApiAggregateLogsRequest = {
  body: {
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
  .then((data: v2.LogsAggregateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
