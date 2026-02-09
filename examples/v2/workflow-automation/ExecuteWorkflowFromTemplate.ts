/**
 * Execute a workflow from a template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.executeWorkflowFromTemplate"] = true;
const apiInstance = new v2.WorkflowAutomationApi(configuration);

const params: v2.WorkflowAutomationApiExecuteWorkflowFromTemplateRequest = {
  body: {
    data: {
      attributes: {
        config: {
          connections: [
            {
              connectionId: "11111111-1111-1111-1111-111111111111",
              label: "INTEGRATION_DATADOG",
            },
          ],
          inputs: {},
        },
        templateId: "template-789",
      },
      id: "1234",
      type: "workflow_headless_execution_request",
    },
  },
  parentId: "parent_id",
};

apiInstance
  .executeWorkflowFromTemplate(params)
  .then((data: v2.WorkflowHeadlessExecutionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
