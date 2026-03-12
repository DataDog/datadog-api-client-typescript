/**
 * Create a monitor with aggregate augmented query variables returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "query alert",
    query: `formula("query1").rollup("sum").last("5m") > 124`,
    message: "test message",
    options: {
      thresholds: {
        critical: 124,
      },
      variables: [
        {
          dataSource: "aggregate_augmented_query",
          name: "query1",
          groupBy: [
            {
              facet: "org_id",
            },
            {
              facet: "name",
            },
          ],
          compute: [
            {
              name: "compute_result",
              aggregation: "max",
            },
          ],
          augmentQuery: {
            name: "filter_query",
            dataSource: "reference_table",
            tableName: "test_table",
            columns: [
              {
                name: "org_id",
              },
              {
                name: "name",
              },
            ],
          },
          baseQuery: {
            dataSource: "metrics",
            name: "query1",
            query: "avg:dd{*} by {org_id}.as_count()",
          },
          joinCondition: {
            augmentAttribute: "org_id",
            baseAttribute: "org_id",
            joinType: "inner",
          },
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
