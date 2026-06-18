/**
 * Get all ticket creation rules returns "Successfully retrieved the list of ticket creation rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.listSecurityFindingsAutomationTicketCreationRules"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listSecurityFindingsAutomationTicketCreationRules()
  .then((data: v2.TicketCreationRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
