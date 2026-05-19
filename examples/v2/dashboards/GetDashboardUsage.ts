/**
 * Get usage stats for a dashboard returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getDashboardUsage"] = true;
const apiInstance = new v2.DashboardsApi(configuration);

// there is a valid "dashboard" in the system
const DASHBOARD_ID = process.env.DASHBOARD_ID as string;

const params: v2.DashboardsApiGetDashboardUsageRequest = {
  dashboardId: DASHBOARD_ID,
};

apiInstance
  .getDashboardUsage(params)
  .then((data: v2.DashboardUsageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
