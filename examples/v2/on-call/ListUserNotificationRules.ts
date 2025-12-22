/**
 * List On-Call notification rules for a user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.OnCallApiListUserNotificationRulesRequest = {
  include: "channel",
  userId: USER_DATA_ID,
};

apiInstance
  .listUserNotificationRules(params)
  .then((data: v2.ListOnCallNotificationRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
