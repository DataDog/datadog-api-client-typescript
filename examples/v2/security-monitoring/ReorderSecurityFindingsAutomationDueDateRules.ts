/**
 * Reorder due date rules returns "Successfully reordered the due date rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.reorderSecurityFindingsAutomationDueDateRules"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_due_date_rule" in the system
const VALID_DUE_DATE_RULE_DATA_ID = process.env
  .VALID_DUE_DATE_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiReorderSecurityFindingsAutomationDueDateRulesRequest =
  {
    body: {
      data: [
        {
          id: VALID_DUE_DATE_RULE_DATA_ID,
          type: "due_date_rules",
        },
      ],
    },
  };

apiInstance
  .reorderSecurityFindingsAutomationDueDateRules(params)
  .then((data: v2.DueDateRuleReorderRequest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
