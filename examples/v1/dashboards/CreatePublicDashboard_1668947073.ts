/**
 * Create a shared dashboard with a group template variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "dashboard" in the system
const DASHBOARD_ID = process.env.DASHBOARD_ID as string;

const params: v1.DashboardsApiCreatePublicDashboardRequest = {
  body: {
    dashboardId: DASHBOARD_ID,
    dashboardType: "custom_timeboard",
    shareType: "open",
    globalTime: {
      liveSpan: "1h",
    },
    selectableTemplateVars: [
      {
        defaultValue: "*",
        name: "group_by_var",
        type: "group",
        visibleTags: ["selectableValue1", "selectableValue2"],
      },
    ],
  },
};

apiInstance
  .createPublicDashboard(params)
  .then((data: v1.SharedDashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
