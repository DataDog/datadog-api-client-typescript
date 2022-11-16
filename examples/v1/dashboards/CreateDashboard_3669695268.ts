/**
 * Create a new dashboard with logs query table widget and storage parameter
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title:
      "Example-Create_a_new_dashboard_with_logs_query_table_widget_and_storage_parameter with query table widget and storage parameter",
    widgets: [
      {
        definition: {
          type: "query_table",
          requests: [
            {
              queries: [
                {
                  dataSource: "logs",
                  name: "query1",
                  search: {
                    query: "",
                  },
                  indexes: ["*"],
                  compute: {
                    aggregation: "count",
                  },
                  groupBy: [],
                  storage: "online_archives",
                },
              ],
              formulas: [
                {
                  conditionalFormats: [],
                  cellDisplayMode: "bar",
                  formula: "query1",
                  limit: {
                    count: 50,
                    order: "desc",
                  },
                },
              ],
              responseFormat: "scalar",
            },
          ],
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
