/**
 * Create an On-Call email for a user returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.OnCallApiCreateUserEmailNotificationChannelRequest = {
  body: {
    data: {
      attributes: {
        active: true,
        address: "john.doe@datadoghq.com",
        alias: "",
        formats: ["html"],
      },
      type: "emails",
    },
  },
  userId: USER_DATA_ID,
};

apiInstance
  .createUserEmailNotificationChannel(params)
  .then((data: v2.Email) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
