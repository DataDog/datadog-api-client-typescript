/**
 * Create a new dashboard with scatterplot widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    description: "",
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 47,
          height: 15,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          time: {},
          type: "scatterplot",
          requests: {
            table: {
              formulas: [
                {
                  formula: "query1",
                  dimension: "x",
                  alias: "",
                },
                {
                  formula: "query2",
                  dimension: "y",
                  alias: "",
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
          xaxis: {
            scale: "linear",
            includeZero: true,
            min: "auto",
            max: "auto",
          },
          yaxis: {
            scale: "linear",
            includeZero: true,
            min: "auto",
            max: "auto",
          },
          colorByGroups: [],
        },
      },
    ],
    templateVariables: [],
    layoutType: "free",
    notifyList: [],
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
