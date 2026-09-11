/**
 * Get a default inbox rule returns "Successfully retrieved the default inbox rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.getSecurityFindingsAutomationDefaultInboxRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetSecurityFindingsAutomationDefaultInboxRuleRequest =
  {
    ruleId: "secret_default_rule",
  };

apiInstance
  .getSecurityFindingsAutomationDefaultInboxRule(params)
  .then((data: v2.DefaultInboxRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
