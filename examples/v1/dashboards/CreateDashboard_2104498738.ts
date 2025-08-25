/**
 * Create a new dashboard with formulas and functions scatterplot widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    widgets: [
      {
        id: 5346764334358972,
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "scatterplot",
          requests: {
            table: {
              formulas: [
                {
                  formula: "query1",
                  dimension: "x",
                  alias: "my-query1",
                },
                {
                  formula: "query2",
                  dimension: "y",
                  alias: "my-query2",
                },
              ],
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{*} by {service}",
                  aggregator: "avg",
                },
                {
                  dataSource: "metrics",
                  name: "query2",
                  query: "avg:system.mem.used{*} by {service}",
                  aggregator: "avg",
                },
              ],
              responseFormat: "scalar",
            },
          },
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 2,
        },
      },
    ],
    layoutType: "ordered",
  },
};

apiInstance
  .createDashboard(params)
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
