/**
 * Get all severity modifier rules returns "Successfully retrieved the list of severity modifier rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations[
  "v2.listSecurityFindingsAutomationSeverityModifierRules"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listSecurityFindingsAutomationSeverityModifierRules()
  .then((data: v2.SeverityModifierRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
