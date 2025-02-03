/**
 * Create Workflows webhook handle returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

const params: v2.MicrosoftTeamsIntegrationApiCreateWorkflowsWebhookHandleRequest =
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
  };

apiInstance
  .createWorkflowsWebhookHandle(params)
  .then((data: v2.MicrosoftTeamsWorkflowsWebhookHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
