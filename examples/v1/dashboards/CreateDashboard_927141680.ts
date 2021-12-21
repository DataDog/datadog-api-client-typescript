/**
 * Create a new dashboard with funnel widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title:
      "Example-Create_a_new_dashboard_with_funnel_widget with funnel widget",
    widgets: [
      {
        definition: {
          type: "funnel",
          requests: [
            {
              query: {
                dataSource: "rum",
                queryString: "",
                steps: [],
              },
              requestType: "funnel",
            },
          ],
        },
      },
    ],
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
