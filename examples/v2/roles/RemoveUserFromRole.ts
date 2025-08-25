/**
 * Remove a user from a role returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
const ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.RolesApiRemoveUserFromRoleRequest = {
  body: {
    data: {
      id: USER_DATA_ID,
      type: "users",
    },
  },
  roleId: ROLE_DATA_ID,
};

apiInstance
  .removeUserFromRole(params)
  .then((data: v2.UsersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
