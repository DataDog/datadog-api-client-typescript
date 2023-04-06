/**
 * Create a new dashboard with apm dependency stats widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
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
                  stat: "avg_duration",
                  resourceName:
                    "DELETE FROM monitor_history.monitor_state_change_history WHERE org_id = ? AND monitor_id IN ? AND group = ?",
                  name: "query1",
                  service: "cassandra",
                  dataSource: "apm_dependency_stats",
                  env: "ci",
                  primaryTagName: "datacenter",
                  operationName: "cassandra.query",
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
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
