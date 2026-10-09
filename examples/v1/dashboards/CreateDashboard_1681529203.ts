/**
 * Create a heatgrid widget with custom gradient colors for both themes
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    layoutType: "ordered",
    widgets: [
      {
        definition: {
          type: "heatgrid",
          requests: [
            {
              responseFormat: "timeseries",
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{*} by {host}",
                },
              ],
              formulas: [
                {
                  formula: "query1",
                },
              ],
            },
          ],
          sort: {
            nestingDisplay: "flat",
            sortBy: {
              property: "value",
              order: "desc",
              aggregation: "avg",
            },
          },
          color: {
            mode: "gradient",
            source: "custom",
            stops: [
              {
                position: 0,
                color: ["#FFFFFF", "#000000"],
              },
              {
                position: 100,
                color: "#FF0000",
              },
            ],
          },
          legend: {
            showCaption: true,
          },
          labelColumn: {
            width: "m",
          },
        },
      },
    ],
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
