/**
 * Reorder severity modifier rules returns "Successfully reordered the severity modifier rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.reorderSecurityFindingsAutomationSeverityModifierRules"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_severity_modifier_rule" in the system
const VALID_SEVERITY_MODIFIER_RULE_DATA_ID = process.env
  .VALID_SEVERITY_MODIFIER_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiReorderSecurityFindingsAutomationSeverityModifierRulesRequest =
  {
    body: {
      data: [
        {
          id: VALID_SEVERITY_MODIFIER_RULE_DATA_ID,
          type: "severity_modifier_rules",
        },
      ],
    },
  };

apiInstance
  .reorderSecurityFindingsAutomationSeverityModifierRules(params)
  .then((data: v2.SeverityModifierRuleReorderResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
