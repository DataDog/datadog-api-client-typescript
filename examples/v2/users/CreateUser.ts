/**
 * Create a user returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params: v2.UsersApiCreateUserRequest = {
  body: {
    data: {
      type: "users",
      attributes: {
        name: "Datadog API Client Python",
        email: "Example-Create_a_user_returns_OK_response@datadoghq.com",
      },
    },
  },
};

apiInstance
  .createUser(params)
  .then((data: v2.UserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
