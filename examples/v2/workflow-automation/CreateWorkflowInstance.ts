/**
 * Execute a workflow returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WorkflowAutomationApi(configuration);

const params: v2.WorkflowAutomationApiCreateWorkflowInstanceRequest = {
  body: {
    meta: {
      payload: {
        input: "value",
      },
    },
  },
  workflowId: "ccf73164-1998-4785-a7a3-8d06c7e5f558",
};

apiInstance
  .createWorkflowInstance(params)
  .then((data: v2.WorkflowInstanceCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
