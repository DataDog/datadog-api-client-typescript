/**
 * Update a due date rule returns "Successfully updated the due date rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.updateSecurityFindingsAutomationDueDateRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_due_date_rule" in the system
const VALID_DUE_DATE_RULE_DATA_ID = process.env
  .VALID_DUE_DATE_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiUpdateSecurityFindingsAutomationDueDateRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            dueDaysPerSeverity: [
              {
                dueInDays: 14,
                severity: "critical",
              },
            ],
            dueFrom: "first_seen",
          },
          enabled: false,
          name: "Example-Security-Monitoring",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:staging",
          },
        },
        type: "due_date_rules",
      },
    },
    ruleId: VALID_DUE_DATE_RULE_DATA_ID,
  };

apiInstance
  .updateSecurityFindingsAutomationDueDateRule(params)
  .then((data: v2.DueDateRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
