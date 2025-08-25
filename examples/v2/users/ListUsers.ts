/**
 * List all users returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ATTRIBUTES_EMAIL = process.env
  .USER_DATA_ATTRIBUTES_EMAIL as string;

const params: v2.UsersApiListUsersRequest = {
  filter: USER_DATA_ATTRIBUTES_EMAIL,
};

apiInstance
  .listUsers(params)
  .then((data: v2.UsersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
