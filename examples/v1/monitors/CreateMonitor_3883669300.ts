/**
 * Create a RUM formula and functions monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "rum alert",
    query: `formula("query2 / query1 * 100").last("15m") >= 0.8`,
    message: "some message Notify: @hipchat-channel",
    tags: ["test:examplemonitor", "env:ci"],
    priority: 3,
    options: {
      thresholds: {
        critical: 0.8,
      },
      variables: [
        {
          dataSource: "rum",
          name: "query2",
          search: {
            query: "",
          },
          indexes: ["*"],
          compute: {
            aggregation: "count",
          },
          groupBy: [],
        },
        {
          dataSource: "rum",
          name: "query1",
          search: {
            query: "status:error",
          },
          indexes: ["*"],
          compute: {
            aggregation: "count",
          },
          groupBy: [],
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
