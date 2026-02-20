/**
 * Update organization handle returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

// there is a valid "organization_handle" in the system
const ORGANIZATION_HANDLE_DATA_ID = process.env
  .ORGANIZATION_HANDLE_DATA_ID as string;

const params: v2.GoogleChatIntegrationApiUpdateOrganizationHandleRequest = {
  body: {
    data: {
      attributes: {
        name: "fake-handle-name--updated",
      },
    },
    type: "google-chat-organization-handle",
  },
  organizationBindingId: "e54cb570-c674-529c-769d-84b312288ed7",
  handleId: ORGANIZATION_HANDLE_DATA_ID,
};

apiInstance
  .updateOrganizationHandle(params)
  .then((data: v2.GoogleChatOrganizationHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
