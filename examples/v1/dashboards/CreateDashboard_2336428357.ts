/**
 * Create a new dashboard with query_table widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Create_a_new_dashboard_with_query_table_widget",
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
                  limit: {
                    count: 500,
                    order: "desc",
                  },
                  conditionalFormats: [],
                  cellDisplayMode: "bar",
                },
              ],
              responseFormat: "scalar",
            },
          ],
          hasSearchBar: "auto",
        },
      },
    ],
    templateVariables: [],
    layoutType: "free",
    isReadOnly: false,
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
