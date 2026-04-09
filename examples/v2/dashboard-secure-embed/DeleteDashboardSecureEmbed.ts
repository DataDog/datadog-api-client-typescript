/**
 * Delete a secure embed for a dashboard returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteDashboardSecureEmbed"] = true;
const apiInstance = new v2.DashboardSecureEmbedApi(configuration);

const params: v2.DashboardSecureEmbedApiDeleteDashboardSecureEmbedRequest = {
  dashboardId: "dashboard_id",
  token: "token",
};

apiInstance
  .deleteDashboardSecureEmbed(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
