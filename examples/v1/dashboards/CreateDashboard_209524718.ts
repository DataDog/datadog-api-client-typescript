/**
 * Create a heatgrid widget with bin labels and formatted row labels
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
              property: "label",
              order: "asc",
            },
          },
          color: {
            mode: "discrete",
            source: "custom",
            bins: [
              {
                color: "#00FF00",
                label: "Normal",
              },
              {
                color: "#FF0000",
                lowerBound: 80,
                label: "High",
              },
            ],
          },
          labelColumn: {
            textFormats: [
              {
                match: {
                  type: "starts_with",
                  value: "api-",
                },
                replace: {
                  type: "substring",
                  substring: "api-",
                  _with: "",
                },
              },
              {
                match: {
                  type: "is",
                  value: "unknown",
                },
                replace: {
                  type: "all",
                  _with: "Other",
                },
              },
            ],
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
