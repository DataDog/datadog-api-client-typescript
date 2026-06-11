/**
 * Delete a Google Chat organization binding returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiDeleteGoogleChatOrganizationRequest = {
  organizationBindingId: "organization_binding_id",
};

apiInstance
  .deleteGoogleChatOrganization(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
