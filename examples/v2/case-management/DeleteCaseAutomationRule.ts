/**
 * Delete an automation rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteCaseAutomationRule"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiDeleteCaseAutomationRuleRequest = {
  projectId: "project_id",
  ruleId: "rule_id",
};

apiInstance
  .deleteCaseAutomationRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
