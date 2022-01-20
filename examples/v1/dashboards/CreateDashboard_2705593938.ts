/**
 * Create a new dashboard with sunburst widget and metrics data
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title:
      "Test-Example-Create_a_new_dashboard_with_sunburst_widget_and_metrics_data",
    widgets: [
      {
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "sunburst",
          requests: [
            {
              responseFormat: "scalar",
              formulas: [
                {
                  formula: "query1",
                },
              ],
              queries: [
                {
                  query: "sum:system.mem.used{*} by {service}",
                  dataSource: "metrics",
                  name: "query1",
                  aggregator: "sum",
                },
              ],
            },
          ],
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 4,
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
