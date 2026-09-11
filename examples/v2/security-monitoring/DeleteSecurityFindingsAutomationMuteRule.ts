/**
 * Delete a mute rule returns "Successfully deleted the mute rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.deleteSecurityFindingsAutomationMuteRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiDeleteSecurityFindingsAutomationMuteRuleRequest =
  {
    ruleId: "00000000-0000-0000-0000-000000000000",
  };

apiInstance
  .deleteSecurityFindingsAutomationMuteRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
