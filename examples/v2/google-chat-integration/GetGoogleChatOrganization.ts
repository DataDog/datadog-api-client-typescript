/**
 * Get a Google Chat organization binding returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiGetGoogleChatOrganizationRequest = {
  organizationBindingId: "organization_binding_id",
};

apiInstance
  .getGoogleChatOrganization(params)
  .then((data: v2.GoogleChatOrganizationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
