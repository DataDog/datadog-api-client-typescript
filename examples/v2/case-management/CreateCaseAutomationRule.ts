/**
 * Create an automation rule returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCaseAutomationRule"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateCaseAutomationRuleRequest = {
  body: {
    data: {
      attributes: {
        action: {
          data: {
            handle: "workflow-handle-123",
          },
          type: "execute_workflow",
        },
        name: "Auto-assign workflow",
        state: "ENABLED",
        trigger: {
          data: {},
          type: "case_created",
        },
      },
      type: "rule",
    },
  },
  projectId: "project_id",
};

apiInstance
  .createCaseAutomationRule(params)
  .then((data: v2.AutomationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
