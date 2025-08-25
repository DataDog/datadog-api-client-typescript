/**
 * Cancel a workflow instance returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WorkflowAutomationApi(configuration);

const params: v2.WorkflowAutomationApiCancelWorkflowInstanceRequest = {
  workflowId: "ccf73164-1998-4785-a7a3-8d06c7e5f558",
  instanceId: "305a472b-71ab-4ce8-8f8d-75db635627b5",
};

apiInstance
  .cancelWorkflowInstance(params)
  .then((data: v2.WorklflowCancelInstanceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
