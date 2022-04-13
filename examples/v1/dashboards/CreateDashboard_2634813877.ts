/**
 * Create a new dashboard with event_stream widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Create_a_new_dashboard_with_event_stream_widget",
    description: "",
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 47,
          height: 38,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "event_stream",
          query: "example-query",
          tagsExecution: "and",
          eventSize: "s",
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
