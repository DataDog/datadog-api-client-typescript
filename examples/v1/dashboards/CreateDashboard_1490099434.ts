/**
 * Create a new dashboard with query_table widget and cell_display_mode is trend
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
          width: 54,
          height: 32,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          time: {},
          type: "query_table",
          requests: [
            {
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{*} by {host}",
                  aggregator: "avg",
                },
              ],
              formulas: [
                {
                  formula: "query1",
                  conditionalFormats: [],
                  cellDisplayMode: "trend",
                  cellDisplayModeOptions: {
                    trendType: "line",
                    yScale: "shared",
                  },
                },
              ],
              sort: {
                count: 500,
                orderBy: [
                  {
                    type: "formula",
                    index: 0,
                    order: "desc",
                  },
                ],
              },
              responseFormat: "scalar",
            },
          ],
          hasSearchBar: "auto",
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
