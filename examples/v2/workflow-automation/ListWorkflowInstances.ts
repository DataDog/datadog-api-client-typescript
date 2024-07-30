/**
 * List workflow instances returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WorkflowAutomationApi(configuration);

const params: v2.WorkflowAutomationApiListWorkflowInstancesRequest = {
  workflowId: "ccf73164-1998-4785-a7a3-8d06c7e5f558",
};

apiInstance
  .listWorkflowInstances(params)
  .then((data: v2.WorkflowListInstancesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
