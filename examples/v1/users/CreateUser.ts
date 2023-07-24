/**
 * Create a user returns "User created" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

const params: v1.UsersApiCreateUserRequest = {
  body: {
    accessRole: "ro",
    disabled: false,
    email: "test@datadoghq.com",
    handle: "test@datadoghq.com",
    name: "test user",
  },
};

apiInstance
  .createUser(params)
  .then((data: v1.UserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
