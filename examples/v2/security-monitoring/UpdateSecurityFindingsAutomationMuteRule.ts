/**
 * Update a mute rule returns "Successfully updated the mute rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.updateSecurityFindingsAutomationMuteRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_mute_rule" in the system
const VALID_MUTE_RULE_DATA_ID = process.env.VALID_MUTE_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiUpdateSecurityFindingsAutomationMuteRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            reason: "false_positive",
          },
          enabled: false,
          name: "Example-Security-Monitoring",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:staging",
          },
        },
        type: "mute_rules",
      },
    },
    ruleId: VALID_MUTE_RULE_DATA_ID,
  };

apiInstance
  .updateSecurityFindingsAutomationMuteRule(params)
  .then((data: v2.MuteRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
