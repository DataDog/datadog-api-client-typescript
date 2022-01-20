/**
 * Create a new dashboard with query_value widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Test-Example-Create_a_new_dashboard_with_query_value_widget",
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
          type: "query_value",
          requests: [
            {
              responseFormat: "scalar",
              queries: [
                {
                  name: "query1",
                  dataSource: "metrics",
                  query: "avg:system.cpu.user{*}",
                  aggregator: "avg",
                },
              ],
            },
          ],
          autoscale: true,
          precision: 2,
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
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
