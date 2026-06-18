/**
 * Create a due date rule returns "Successfully created the due date rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.createSecurityFindingsAutomationDueDateRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityFindingsAutomationDueDateRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            dueDaysPerSeverity: [
              {
                dueInDays: 7,
                severity: "critical",
              },
            ],
            dueFrom: "first_seen",
          },
          enabled: true,
          name: "Example-Security-Monitoring",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:staging",
          },
        },
        type: "due_date_rules",
      },
    },
  };

apiInstance
  .createSecurityFindingsAutomationDueDateRule(params)
  .then((data: v2.DueDateRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
