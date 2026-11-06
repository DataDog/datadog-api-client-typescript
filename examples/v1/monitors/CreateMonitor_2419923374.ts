/**
 * Create a monitor with a metrics formula variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "query alert",
    query: `formula("query1 / query2").rollup("avg").last("5m") > threshold`,
    message: "some message Notify: @hipchat-channel",
    tags: ["test:examplemonitor", "env:ci"],
    options: {
      thresholds: {
        criticalQuery: `formula("query1 / query2").rollup("p99").last("1w").multiplier(1.5)`,
      },
      variables: [
        {
          name: "query1",
          dataSource: "metrics",
          query: "sum:trace.http.request.errors{*}.as_count()",
        },
        {
          name: "query2",
          dataSource: "metrics",
          query: "sum:trace.http.request.hits{*}.as_count()",
        },
      ],
    },
  },
};

apiInstance
  .createMonitor(params)
  .then((data: v1.Monitor) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
