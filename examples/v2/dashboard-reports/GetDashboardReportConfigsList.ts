/**
 * Get Dashboard Reports for a Dashboard returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DashboardReportsApi(configuration);

// there is a valid "dashboard" in the system
const DASHBOARD_ID = process.env.DASHBOARD_ID as string;

const params: v2.DashboardReportsApiGetDashboardReportConfigsListRequest = {
  dashboardId: DASHBOARD_ID,
};

apiInstance
  .getDashboardReportConfigsList(params)
  .then((data: v2.DashboardReportsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
