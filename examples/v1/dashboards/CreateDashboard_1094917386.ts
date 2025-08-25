/**
 * Create a new dashboard with manage_status widget and show_priority parameter
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    description: "",
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 50,
          height: 25,
        },
        definition: {
          type: "manage_status",
          summaryType: "monitors",
          displayFormat: "countsAndList",
          colorPreference: "text",
          hideZeroCounts: true,
          showLastTriggered: false,
          query: "",
          sort: "priority,asc",
          count: 50,
          start: 0,
          showPriority: false,
        },
      },
    ],
    templateVariables: [],
    layoutType: "free",
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
