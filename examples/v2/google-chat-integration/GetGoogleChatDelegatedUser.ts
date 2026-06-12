/**
 * Get the delegated user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiGetGoogleChatDelegatedUserRequest = {
  organizationBindingId: "organization_binding_id",
};

apiInstance
  .getGoogleChatDelegatedUser(params)
  .then((data: v2.GoogleChatDelegatedUserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
