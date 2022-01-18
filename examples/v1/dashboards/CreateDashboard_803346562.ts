/**
 * Create a new dashboard with distribution widget and apm stats data
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title:
      "Example-Create_a_new_dashboard_with_distribution_widget_and_apm_stats_data",
    widgets: [
      {
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "distribution",
          requests: [
            {
              apmStatsQuery: {
                env: "prod",
                service: "cassandra",
                name: "cassandra.query",
                primaryTag: "datacenter:dc1",
                rowType: "service",
              },
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
