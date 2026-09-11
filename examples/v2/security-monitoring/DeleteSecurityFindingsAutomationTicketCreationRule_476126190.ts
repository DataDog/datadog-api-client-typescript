/**
 * Delete a ticket creation rule returns "Rule successfully deleted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.deleteSecurityFindingsAutomationTicketCreationRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_ticket_creation_rule" in the system
const VALID_TICKET_CREATION_RULE_DATA_ID = process.env
  .VALID_TICKET_CREATION_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiDeleteSecurityFindingsAutomationTicketCreationRuleRequest =
  {
    ruleId: VALID_TICKET_CREATION_RULE_DATA_ID,
  };

apiInstance
  .deleteSecurityFindingsAutomationTicketCreationRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
