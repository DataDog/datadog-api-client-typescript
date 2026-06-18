/**
 * Get all mute rules returns "Successfully retrieved the list of mute rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listSecurityFindingsAutomationMuteRules"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listSecurityFindingsAutomationMuteRules()
  .then((data: v2.MuteRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
