/**
 * Update Workflows webhook handle returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

const params: v2.MicrosoftTeamsIntegrationApiUpdateWorkflowsWebhookHandleRequest =
  {
    body: {
      data: {
        attributes: {
          name: "fake-handle-name",
          url: "https://fake.url.com",
        },
        type: "workflows-webhook-handle",
      },
    },
    handleId: "handle_id",
  };

apiInstance
  .updateWorkflowsWebhookHandle(params)
  .then((data: v2.MicrosoftTeamsWorkflowsWebhookHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
