/**
 * Update an inbox rule returns "Inbox rule successfully updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_inbox_rule" in the system
const VALID_INBOX_RULE_DATA_ID = process.env.VALID_INBOX_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiUpdateInboxRuleRequest = {
  body: {
    data: {
      attributes: {
        action: {
          reasonDescription: "We want to focus on these items.",
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
      id: VALID_INBOX_RULE_DATA_ID,
      type: "inbox_rules",
    },
  },
  inboxRuleId: VALID_INBOX_RULE_DATA_ID,
};

apiInstance
  .updateInboxRule(params)
  .then((data: v2.InboxRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
