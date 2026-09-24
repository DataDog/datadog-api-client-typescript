/**
 * Delete a due date rule returns "Successfully deleted the due date rule" response
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
  "v2.deleteSecurityFindingsAutomationDueDateRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiDeleteSecurityFindingsAutomationDueDateRuleRequest =
  {
    ruleId: "00000000-0000-0000-0000-000000000000",
  };

apiInstance
  .deleteSecurityFindingsAutomationDueDateRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
