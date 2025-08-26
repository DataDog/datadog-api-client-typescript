/**
 * Create a new timeseries widget with hide incomplete cost data
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard with hide incomplete cost data",
    widgets: [
      {
        definition: {
          title: "",
          showLegend: true,
          legendLayout: "auto",
          legendColumns: ["avg", "min", "max", "value", "sum"],
          time: {
            hideIncompleteCostData: true,
          },
          type: "timeseries",
          requests: [
            {
              formulas: [
                {
                  formula: "query1",
                },
              ],
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{*}",
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
