/**
 * Revoke shared dashboard invitations returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiDeletePublicDashboardInvitationRequest = {
  body: {
    data: [
      {
        attributes: {
          email: "test@datadoghq.com",
        },
        type: "public_dashboard_invitation",
      },
    ],
  },
  token: "token",
};

apiInstance
  .deletePublicDashboardInvitation(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
