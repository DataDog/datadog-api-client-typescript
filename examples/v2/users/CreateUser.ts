/**
 * Create a user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

const params: v2.UsersApiCreateUserRequest = {
  body: {
    data: {
      type: "users",
      attributes: {
        name: "Datadog API Client Python",
        email: "Example-User@datadoghq.com",
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
