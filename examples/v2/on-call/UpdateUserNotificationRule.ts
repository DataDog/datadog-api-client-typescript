/**
 * Update an On-Call notification rule for a user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

// there is a valid "oncall_email_notification_rule" in the system
const ONCALL_EMAIL_NOTIFICATION_RULE_DATA_ID = process.env
  .ONCALL_EMAIL_NOTIFICATION_RULE_DATA_ID as string;

// there is a valid "oncall_email_notification_channel" in the system
const ONCALL_EMAIL_NOTIFICATION_CHANNEL_DATA_ID = process.env
  .ONCALL_EMAIL_NOTIFICATION_CHANNEL_DATA_ID as string;

const params: v2.OnCallApiUpdateUserNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        category: "high_urgency",
        delayMinutes: 1,
      },
      id: ONCALL_EMAIL_NOTIFICATION_RULE_DATA_ID,
      relationships: {
        channel: {
          data: {
            id: ONCALL_EMAIL_NOTIFICATION_CHANNEL_DATA_ID,
            type: "notification_channels",
          },
        },
      },
      type: "notification_rules",
    },
  },
  userId: USER_DATA_ID,
  ruleId: ONCALL_EMAIL_NOTIFICATION_RULE_DATA_ID,
  include: "channel",
};

apiInstance
  .updateUserNotificationRule(params)
  .then((data: v2.OnCallNotificationRule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
