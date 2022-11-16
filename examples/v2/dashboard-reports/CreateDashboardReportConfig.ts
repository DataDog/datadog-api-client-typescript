/**
 * Create a new Dashboard Report returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DashboardReportsApi(configuration);

// there is a valid "dashboard" in the system
const DASHBOARD_ID = process.env.DASHBOARD_ID as string;

const params: v2.DashboardReportsApiCreateDashboardReportConfigRequest = {
  body: {
    data: {
      attributes: {
        description:
          "This report summarizes the recent errors, latency, and uptime of our Web Application Backend.",
        destinations: {
          email: {
            recipientAddresses: ["jane.doe@example.com"],
          },
        },
        schedule: {
          active: true,
          frequency: "1d",
          repeatAt: "13:30",
          repeatOnDayOfMonth: undefined,
          repeatOnDayOfWeek: undefined,
          timezone: "America/New_York",
        },
        timeframe: "1w",
        title:
          "Summary of recent stability and performance for Web Application Backend",
      },
      type: "dashboard_reports",
    },
  },
  dashboardId: DASHBOARD_ID,
};

apiInstance
  .createDashboardReportConfig(params)
  .then((data: v2.DashboardReportResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
