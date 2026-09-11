/**
 * Update an inbox rule returns "Successfully updated the inbox rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.updateSecurityFindingsAutomationInboxRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_inbox_rule" in the system
const VALID_INBOX_RULE_DATA_ID = process.env.VALID_INBOX_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiUpdateSecurityFindingsAutomationInboxRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            description: "Needs triage",
          },
          enabled: false,
          name: "Example-Security-Monitoring",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:staging",
          },
        },
        id: VALID_INBOX_RULE_DATA_ID,
        type: "inbox_rules",
      },
    },
    ruleId: VALID_INBOX_RULE_DATA_ID,
  };

apiInstance
  .updateSecurityFindingsAutomationInboxRule(params)
  .then((data: v2.InboxRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
