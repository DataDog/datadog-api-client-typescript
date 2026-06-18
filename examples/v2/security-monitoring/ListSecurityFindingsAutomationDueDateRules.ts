/**
 * Get all due date rules returns "Successfully retrieved the list of due date rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.listSecurityFindingsAutomationDueDateRules"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listSecurityFindingsAutomationDueDateRules()
  .then((data: v2.DueDateRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
