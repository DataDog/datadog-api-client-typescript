/**
 * Reorder ticket creation rules returns "Successfully reordered the ticket creation rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.reorderSecurityFindingsAutomationTicketCreationRules"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_ticket_creation_rule" in the system
const VALID_TICKET_CREATION_RULE_DATA_ID = process.env
  .VALID_TICKET_CREATION_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiReorderSecurityFindingsAutomationTicketCreationRulesRequest =
  {
    body: {
      data: [
        {
          id: VALID_TICKET_CREATION_RULE_DATA_ID,
          type: "ticket_creation_rules",
        },
      ],
    },
  };

apiInstance
  .reorderSecurityFindingsAutomationTicketCreationRules(params)
  .then((data: v2.TicketCreationRuleReorderRequest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
