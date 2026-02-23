/**
 * Create organization handle returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiCreateOrganizationHandleRequest = {
  body: {
    data: {
      attributes: {
        name: "Example-Google-Chat-Integration",
        spaceResourceName: "spaces/AAQA-zFIks8",
      },
    },
    type: "google-chat-organization-handle",
  },
  organizationBindingId: "e54cb570-c674-529c-769d-84b312288ed7",
};

apiInstance
  .createOrganizationHandle(params)
  .then((data: v2.GoogleChatOrganizationHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
