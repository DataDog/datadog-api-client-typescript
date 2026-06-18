/**
 * Reorder mute rules returns "Successfully reordered the mute rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.reorderSecurityFindingsAutomationMuteRules"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_mute_rule" in the system
const VALID_MUTE_RULE_DATA_ID = process.env.VALID_MUTE_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiReorderSecurityFindingsAutomationMuteRulesRequest =
  {
    body: {
      data: [
        {
          id: VALID_MUTE_RULE_DATA_ID,
          type: "mute_rules",
        },
      ],
    },
  };

apiInstance
  .reorderSecurityFindingsAutomationMuteRules(params)
  .then((data: v2.MuteRuleReorderRequest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
