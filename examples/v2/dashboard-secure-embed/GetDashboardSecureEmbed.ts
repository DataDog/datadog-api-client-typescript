/**
 * Get a secure embed for a dashboard returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getDashboardSecureEmbed"] = true;
const apiInstance = new v2.DashboardSecureEmbedApi(configuration);

const params: v2.DashboardSecureEmbedApiGetDashboardSecureEmbedRequest = {
  dashboardId: "dashboard_id",
  token: "token",
};

apiInstance
  .getDashboardSecureEmbed(params)
  .then((data: v2.SecureEmbedGetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
