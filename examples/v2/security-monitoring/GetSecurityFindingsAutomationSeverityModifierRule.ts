/**
 * Get a severity modifier rule returns "Successfully retrieved the severity modifier rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.getSecurityFindingsAutomationSeverityModifierRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_severity_modifier_rule" in the system
const VALID_SEVERITY_MODIFIER_RULE_DATA_ID = process.env
  .VALID_SEVERITY_MODIFIER_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetSecurityFindingsAutomationSeverityModifierRuleRequest =
  {
    ruleId: VALID_SEVERITY_MODIFIER_RULE_DATA_ID,
  };

apiInstance
  .getSecurityFindingsAutomationSeverityModifierRule(params)
  .then((data: v2.SeverityModifierRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
