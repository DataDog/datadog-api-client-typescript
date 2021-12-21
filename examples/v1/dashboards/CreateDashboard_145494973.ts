/**
 * Create a new dashboard with apm resource stats widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Create_a_new_dashboard_with_apm_resource_stats_widget",
    widgets: [
      {
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "query_table",
          requests: [
            {
              responseFormat: "scalar",
              queries: [
                {
                  primaryTagValue: "edge-eu1.prod.dog",
                  stat: "hits",
                  name: "query1",
                  service: "cassandra",
                  dataSource: "apm_resource_stats",
                  env: "ci",
                  primaryTagName: "datacenter",
                  operationName: "cassandra.query",
                  groupBy: ["resource_name"],
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
