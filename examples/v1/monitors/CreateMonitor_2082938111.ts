/**
 * Create a monitor with aggregate filtered query variables returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "query alert",
    query: `formula("query1").rollup("sum").last("5m") > 100`,
    message: "test message",
    options: {
      thresholds: {
        critical: 100,
      },
      variables: [
        {
          dataSource: "aggregate_filtered_query",
          name: "query1",
          baseQuery: {
            dataSource: "metrics",
            name: "query1",
            query:
              "max:container.cpu.usage{*} by {kube_cluster_name}.rollup(max)",
          },
          filterQuery: {
            name: "filter_query",
            dataSource: "reference_table",
            tableName: "test_table",
            columns: [
              {
                name: "cluster_name",
              },
            ],
          },
          filters: [
            {
              baseAttribute: "kube_cluster_name",
              filterAttribute: "cluster_name",
            },
          ],
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
