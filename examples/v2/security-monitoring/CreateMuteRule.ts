/**
 * Create a new mute rule returns "Successfully created the mute rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateMuteRuleRequest = {
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
      type: "mute_rules",
    },
  },
};

apiInstance
  .createMuteRule(params)
  .then((data: v2.MuteRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
