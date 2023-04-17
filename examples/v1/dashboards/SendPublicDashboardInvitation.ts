/**
 * Send shared dashboard invitation email returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "shared_dashboard" in the system
const SHARED_DASHBOARD_TOKEN = process.env.SHARED_DASHBOARD_TOKEN as string;

const params: v1.DashboardsApiSendPublicDashboardInvitationRequest = {
  body: {
    data: {
      attributes: {
        email: "exampledashboard@datadoghq.com",
      },
      type: "public_dashboard_invitation",
    },
  },
  token: SHARED_DASHBOARD_TOKEN,
};

apiInstance
  .sendPublicDashboardInvitation(params)
  .then((data: v1.SharedDashboardInvites) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
