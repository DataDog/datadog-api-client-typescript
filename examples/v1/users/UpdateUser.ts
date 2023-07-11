/**
 * Update a user returns "User updated" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

const params: v1.UsersApiUpdateUserRequest = {
  body: {
    accessRole: "ro",
    disabled: false,
    email: "test@datadoghq.com",
    handle: "test@datadoghq.com",
    name: "test user",
  },
  userHandle: "test@datadoghq.com",
};

apiInstance
  .updateUser(params)
  .then((data: v1.UserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
