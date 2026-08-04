/**
 * Delete a severity modifier rule returns "Rule successfully deleted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.deleteSecurityFindingsAutomationSeverityModifierRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_severity_modifier_rule" in the system
const VALID_SEVERITY_MODIFIER_RULE_DATA_ID = process.env
  .VALID_SEVERITY_MODIFIER_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiDeleteSecurityFindingsAutomationSeverityModifierRuleRequest =
  {
    ruleId: VALID_SEVERITY_MODIFIER_RULE_DATA_ID,
  };

apiInstance
  .deleteSecurityFindingsAutomationSeverityModifierRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
