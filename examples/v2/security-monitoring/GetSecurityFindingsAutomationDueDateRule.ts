/**
 * Get a due date rule returns "Successfully retrieved the due date rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.getSecurityFindingsAutomationDueDateRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_due_date_rule" in the system
const VALID_DUE_DATE_RULE_DATA_ID = process.env
  .VALID_DUE_DATE_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetSecurityFindingsAutomationDueDateRuleRequest =
  {
    ruleId: VALID_DUE_DATE_RULE_DATA_ID,
  };

apiInstance
  .getSecurityFindingsAutomationDueDateRule(params)
  .then((data: v2.DueDateRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
