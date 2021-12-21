/**
 * Create a new dashboard with formulas and functions scatterplot widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title:
      "Example-Create_a_new_dashboard_with_formulas_and_functions_scatterplot_widget",
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
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
