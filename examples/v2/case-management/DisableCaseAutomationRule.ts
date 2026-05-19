/**
 * Disable an automation rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.disableCaseAutomationRule"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiDisableCaseAutomationRuleRequest = {
  projectId: "project_id",
  ruleId: "rule_id",
};

apiInstance
  .disableCaseAutomationRule(params)
  .then((data: v2.AutomationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
