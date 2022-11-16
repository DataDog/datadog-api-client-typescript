/**
 * Get a Dashboard Report returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DashboardReportsApi(configuration);

// there is a valid "dashboard" in the system
const DASHBOARD_ID = process.env.DASHBOARD_ID as string;

// there is a valid "dashboard_report" in the system
const DASHBOARD_REPORT_DATA_ID = process.env.DASHBOARD_REPORT_DATA_ID as string;

const params: v2.DashboardReportsApiGetDashboardReportConfigRequest = {
  dashboardId: DASHBOARD_ID,
  reportUuid: DASHBOARD_REPORT_DATA_ID,
};

apiInstance
  .getDashboardReportConfig(params)
  .then((data: v2.DashboardReportResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
