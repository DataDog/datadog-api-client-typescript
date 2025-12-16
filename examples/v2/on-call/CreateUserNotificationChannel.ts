/**
 * Create an On-Call notification channel for a user returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.OnCallApiCreateUserNotificationChannelRequest = {
  body: {
    data: {
      attributes: {
        config: {
          address: "foo@bar.com",
          formats: ["html"],
          type: "email",
        },
      },
      type: "notification_channels",
    },
  },
  userId: USER_DATA_ID,
};

apiInstance
  .createUserNotificationChannel(params)
  .then((data: v2.NotificationChannel) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
