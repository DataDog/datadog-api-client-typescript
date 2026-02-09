/**
 * Execute a workflow from a webhook returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.executeWorkflowFromWebhook"] = true;
const apiInstance = new v2.WorkflowAutomationApi(configuration);

const params: v2.WorkflowAutomationApiExecuteWorkflowFromWebhookRequest = {
  body: {
    foo: "bar",
  },
  workflowId: "workflow_id",
  orgId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  xHubSignature256: "sha256=abcdef123456...",
  userAgent: "GitHub-Hookshot/abc123",
};

apiInstance
  .executeWorkflowFromWebhook(params)
  .then((data: v2.WorkflowWebhookExecutionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
