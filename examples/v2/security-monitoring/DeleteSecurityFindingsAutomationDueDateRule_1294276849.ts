/**
 * Delete a due date rule returns "Rule successfully deleted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.deleteSecurityFindingsAutomationDueDateRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_due_date_rule" in the system
const VALID_DUE_DATE_RULE_DATA_ID = process.env
  .VALID_DUE_DATE_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiDeleteSecurityFindingsAutomationDueDateRuleRequest =
  {
    ruleId: VALID_DUE_DATE_RULE_DATA_ID,
  };

apiInstance
  .deleteSecurityFindingsAutomationDueDateRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
