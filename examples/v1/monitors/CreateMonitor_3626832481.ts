/**
 * Create a Data Quality monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "data-quality alert",
    query: `formula("query1").last("5m") > 100`,
    message: "Data quality alert triggered",
    tags: ["test:examplemonitor", "env:ci"],
    priority: 3,
    options: {
      thresholds: {
        critical: 100,
      },
      variables: [
        {
          name: "query1",
          dataSource: "data_quality_metrics",
          measure: "row_count",
          filter:
            `search for column where ` +
            "`" +
            `database:production AND table:users` +
            "`",
          groupBy: ["entity_id"],
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
