/**
 * Disable a user returns "User disabled" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

const params: v1.UsersApiDisableUserRequest = {
  userHandle: "test@datadoghq.com",
};

apiInstance
  .disableUser(params)
  .then((data: v1.UserDisableResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
