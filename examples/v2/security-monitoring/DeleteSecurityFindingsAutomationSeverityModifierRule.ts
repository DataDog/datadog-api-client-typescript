/**
 * Delete a severity modifier rule returns "Successfully deleted the severity modifier rule" response
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
  "v2.deleteSecurityFindingsAutomationSeverityModifierRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiDeleteSecurityFindingsAutomationSeverityModifierRuleRequest =
  {
    ruleId: "00000000-0000-0000-0000-000000000000",
  };

apiInstance
  .deleteSecurityFindingsAutomationSeverityModifierRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
