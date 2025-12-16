/**
 * Get an On-Call notification channel for a user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

// there is a valid "oncall_email_notification_channel" in the system
const ONCALL_EMAIL_NOTIFICATION_CHANNEL_DATA_ID = process.env
  .ONCALL_EMAIL_NOTIFICATION_CHANNEL_DATA_ID as string;

const params: v2.OnCallApiGetUserNotificationChannelRequest = {
  userId: USER_DATA_ID,
  channelId: ONCALL_EMAIL_NOTIFICATION_CHANNEL_DATA_ID,
};

apiInstance
  .getUserNotificationChannel(params)
  .then((data: v2.NotificationChannel) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
