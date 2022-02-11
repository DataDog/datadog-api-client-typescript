/**
 * Create a new dashboard with log_stream widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Create_a_new_dashboard_with_log_stream_widget",
    description: "",
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 47,
          height: 36,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "log_stream",
          indexes: ["main"],
          query: "",
          sort: {
            column: "time",
            order: "desc",
          },
          columns: ["host", "service"],
          showDateColumn: true,
          showMessageColumn: true,
          messageDisplay: "expanded-md",
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
