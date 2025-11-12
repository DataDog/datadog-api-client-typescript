/**
 * Get an On-Call email for a user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

// there is a valid "oncall_email" in the system
const ONCALL_EMAIL_DATA_ID = process.env.ONCALL_EMAIL_DATA_ID as string;

const params: v2.OnCallApiGetUserEmailNotificationChannelRequest = {
  userId: USER_DATA_ID,
  emailId: ONCALL_EMAIL_DATA_ID,
};

apiInstance
  .getUserEmailNotificationChannel(params)
  .then((data: v2.Email) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
