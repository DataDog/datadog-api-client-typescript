/**
 * Create a ticket creation rule returns "Successfully created the ticket creation rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.createSecurityFindingsAutomationTicketCreationRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityFindingsAutomationTicketCreationRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            maxTicketsPerDay: 10,
            projectId: "11111111-1111-1111-1111-111111111111",
            target: "jira",
          },
          enabled: true,
          name: "Example-Security-Monitoring",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:staging",
          },
        },
        type: "ticket_creation_rules",
      },
    },
  };

apiInstance
  .createSecurityFindingsAutomationTicketCreationRule(params)
  .then((data: v2.TicketCreationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
