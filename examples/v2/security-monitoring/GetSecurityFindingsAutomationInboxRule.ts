/**
 * Get an inbox rule returns "Successfully retrieved the inbox rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSecurityFindingsAutomationInboxRule"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_inbox_rule" in the system
const VALID_INBOX_RULE_DATA_ID = process.env.VALID_INBOX_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetSecurityFindingsAutomationInboxRuleRequest =
  {
    ruleId: VALID_INBOX_RULE_DATA_ID,
  };

apiInstance
  .getSecurityFindingsAutomationInboxRule(params)
  .then((data: v2.InboxRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
