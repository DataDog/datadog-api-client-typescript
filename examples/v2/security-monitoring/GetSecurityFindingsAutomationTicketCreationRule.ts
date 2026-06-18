/**
 * Get a ticket creation rule returns "Successfully retrieved the ticket creation rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.getSecurityFindingsAutomationTicketCreationRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_ticket_creation_rule" in the system
const VALID_TICKET_CREATION_RULE_DATA_ID = process.env
  .VALID_TICKET_CREATION_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetSecurityFindingsAutomationTicketCreationRuleRequest =
  {
    ruleId: VALID_TICKET_CREATION_RULE_DATA_ID,
  };

apiInstance
  .getSecurityFindingsAutomationTicketCreationRule(params)
  .then((data: v2.TicketCreationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
