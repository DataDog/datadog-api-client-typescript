/**
 * Create workflow webhook handle returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

const params: v2.MicrosoftTeamsIntegrationApiCreateWorkflowsWebhookHandleRequest =
  {
    body: {
      data: {
        attributes: {
          name: "Example-Microsoft-Teams-Integration",
          url: "https://example.logic.azure.com/workflows/123",
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
