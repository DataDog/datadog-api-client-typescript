/**
 * List shared dashboards for a dashboard returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listSharedDashboardsByDashboardId"] = true;
const apiInstance = new v2.DashboardSharingApi(configuration);

const params: v2.DashboardSharingApiListSharedDashboardsByDashboardIdRequest = {
  dashboardId: "abc-def-ghi",
};

apiInstance
  .listSharedDashboardsByDashboardId(params)
  .then((data: v2.ListSharedDashboardsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
