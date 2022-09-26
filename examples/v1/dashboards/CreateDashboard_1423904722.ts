/**
 * Create a new dashboard with slo list widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Create_a_new_dashboard_with_slo_list_widget",
    description: "",
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 60,
          height: 21,
        },
        definition: {
          titleSize: "16",
          titleAlign: "left",
          type: "slo_list",
          requests: [
            {
              query: {
                queryString: "env:prod AND service:my-app",
                limit: 75,
              },
              requestType: "slo_list",
            },
          ],
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
