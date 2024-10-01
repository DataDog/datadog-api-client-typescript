/**
 * Create handle returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

const params: v2.MicrosoftTeamsIntegrationApiCreateApiHandleRequest = {
  body: {
    data: {
      attributes: {
        channelId: "fake-channel-id",
        name: "fake-handle-name",
        teamId: "00000000-0000-0000-0000-000000000000",
        tenantId: "00000000-0000-0000-0000-000000000001",
      },
      type: "handle",
    },
  },
};

apiInstance
  .createApiHandle(params)
  .then((data: v2.MicrosoftTeamsCreateApiHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
