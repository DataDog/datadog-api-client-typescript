/**
 * Update a user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.UsersApiUpdateUserRequest = {
  body: {
    data: {
      id: USER_DATA_ID,
      type: "users",
      attributes: {
        name: "updated",
        disabled: true,
      },
    },
  },
  userId: USER_DATA_ID,
};

apiInstance
  .updateUser(params)
  .then((data: v2.UserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
