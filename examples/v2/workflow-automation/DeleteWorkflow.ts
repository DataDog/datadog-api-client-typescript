/**
 * Delete an existing Workflow returns "Successfully deleted a workflow." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WorkflowAutomationApi(configuration);

// there is a valid "workflow" in the system
const WORKFLOW_DATA_ID = process.env.WORKFLOW_DATA_ID as string;

const params: v2.WorkflowAutomationApiDeleteWorkflowRequest = {
  workflowId: WORKFLOW_DATA_ID,
};

apiInstance
  .deleteWorkflow(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
