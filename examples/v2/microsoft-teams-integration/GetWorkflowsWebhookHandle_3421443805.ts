/**
 * Get workflow webhook handle information returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

// there is a valid "workflows_webhook_handle" in the system
const WORKFLOWS_WEBHOOK_HANDLE_DATA_ID = process.env
  .WORKFLOWS_WEBHOOK_HANDLE_DATA_ID as string;

const params: v2.MicrosoftTeamsIntegrationApiGetWorkflowsWebhookHandleRequest =
  {
    handleId: WORKFLOWS_WEBHOOK_HANDLE_DATA_ID,
  };

apiInstance
  .getWorkflowsWebhookHandle(params)
  .then((data: v2.MicrosoftTeamsWorkflowsWebhookHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
