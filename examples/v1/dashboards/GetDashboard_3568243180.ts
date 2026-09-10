/**
 * Get a dashboard with five team tags and two AI tags
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "dashboard_with_team_and_ai_tags" in the system
const DASHBOARD_WITH_TEAM_AND_AI_TAGS_ID = process.env
  .DASHBOARD_WITH_TEAM_AND_AI_TAGS_ID as string;

const params: v1.DashboardsApiGetDashboardRequest = {
  dashboardId: DASHBOARD_WITH_TEAM_AND_AI_TAGS_ID,
};

apiInstance
  .getDashboard(params)
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
