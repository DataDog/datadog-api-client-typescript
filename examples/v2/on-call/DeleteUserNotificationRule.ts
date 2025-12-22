/**
 * Delete an On-Call notification rule for a user returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

// there is a valid "oncall_email_notification_rule" in the system
const ONCALL_EMAIL_NOTIFICATION_RULE_DATA_ID = process.env
  .ONCALL_EMAIL_NOTIFICATION_RULE_DATA_ID as string;

const params: v2.OnCallApiDeleteUserNotificationRuleRequest = {
  userId: USER_DATA_ID,
  ruleId: ONCALL_EMAIL_NOTIFICATION_RULE_DATA_ID,
};

apiInstance
  .deleteUserNotificationRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
