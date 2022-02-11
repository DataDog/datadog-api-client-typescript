/**
 * Create a new dashboard with free_text widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Create_a_new_dashboard_with_free_text_widget",
    description: undefined,
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 24,
          height: 6,
        },
        definition: {
          type: "free_text",
          text: "Example free text",
          color: "#4d4d4d",
          fontSize: "auto",
          textAlign: "left",
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
