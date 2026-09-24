/**
 * Delete the delegated user returns "OK" response
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

const params: v2.GoogleChatIntegrationApiDeleteGoogleChatDelegatedUserRequest =
  {
    organizationBindingId: "organization_binding_id",
  };

apiInstance
  .deleteGoogleChatDelegatedUser(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
