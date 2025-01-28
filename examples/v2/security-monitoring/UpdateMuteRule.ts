/**
 * Update a mute rule returns "Mute rule successfully updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_mute_rule" in the system
const VALID_MUTE_RULE_DATA_ID = process.env.VALID_MUTE_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiUpdateMuteRuleRequest = {
  body: {
    data: {
      attributes: {
        action: {
          expireAt: 1893452400000,
          reason: "duplicate",
          reasonDescription: "Muting for a while",
        },
        enabled: true,
        name: "Rule 1",
        rule: {
          issueType: "vulnerability",
          query: "key:val",
          ruleIds: ["rule-id-1"],
          ruleTypes: ["application_code_vulnerability"],
          severities: ["critical"],
        },
      },
      id: VALID_MUTE_RULE_DATA_ID,
      type: "mute_rules",
    },
  },
  muteRuleId: VALID_MUTE_RULE_DATA_ID,
};

apiInstance
  .updateMuteRule(params)
  .then((data: v2.MuteRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
