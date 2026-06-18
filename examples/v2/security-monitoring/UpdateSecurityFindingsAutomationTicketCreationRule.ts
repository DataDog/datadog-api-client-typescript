/**
 * Update a ticket creation rule returns "Successfully updated the ticket creation rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.updateSecurityFindingsAutomationTicketCreationRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_ticket_creation_rule" in the system
const VALID_TICKET_CREATION_RULE_DATA_ID = process.env
  .VALID_TICKET_CREATION_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiUpdateSecurityFindingsAutomationTicketCreationRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            maxTicketsPerDay: 5,
            projectId: "11111111-1111-1111-1111-111111111111",
            target: "jira",
          },
          enabled: false,
          name: "Example-Security-Monitoring",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:staging",
          },
        },
        type: "ticket_creation_rules",
      },
    },
    ruleId: VALID_TICKET_CREATION_RULE_DATA_ID,
  };

apiInstance
  .updateSecurityFindingsAutomationTicketCreationRule(params)
  .then((data: v2.TicketCreationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
