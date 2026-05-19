/**
 * Update an automation rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCaseAutomationRule"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUpdateCaseAutomationRuleRequest = {
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
  ruleId: "rule_id",
};

apiInstance
  .updateCaseAutomationRule(params)
  .then((data: v2.AutomationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
