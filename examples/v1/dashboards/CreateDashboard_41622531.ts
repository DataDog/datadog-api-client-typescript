/**
 * Create a new dashboard with timeseries widget and formula style attributes
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard with formula style",
    widgets: [
      {
        definition: {
          title: "styled timeseries",
          showLegend: true,
          legendLayout: "auto",
          legendColumns: ["avg", "min", "max", "value", "sum"],
          time: {},
          type: "timeseries",
          requests: [
            {
              formulas: [
                {
                  formula: "query1",
                  style: {
                    paletteIndex: 4,
                    palette: "classic",
                  },
                },
              ],
              queries: [
                {
                  query: "avg:system.cpu.user{*}",
                  dataSource: "metrics",
                  name: "query1",
                },
              ],
              responseFormat: "timeseries",
              style: {
                palette: "dog_classic",
                lineType: "solid",
                lineWidth: "normal",
              },
              displayType: "line",
            },
          ],
        },
      },
    ],
    layoutType: "ordered",
    reflowType: "auto",
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
