/**
 * Update current user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

const params: v2.UsersApiUpdateCurrentUserRequest = {
  body: {
    data: {
      attributes: {
        title: undefined,
      },
      id: "00000000-0000-feed-0000-000000000000",
      type: "users",
    },
  },
};

apiInstance
  .updateCurrentUser(params)
  .then((data: v2.UserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
