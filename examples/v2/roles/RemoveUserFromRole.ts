/**
 * Remove a user from a role returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
let ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

// there is a valid "user" in the system

let params: v2.RolesApiRemoveUserFromRoleRequest = {
  body: {
    data: {
      id: "c8b3af54-de75-f62c-8031-23899c4a5fa5",
      type: "users",
    },
  },
  roleId: ROLE_DATA_ID,
};

apiInstance
  .removeUserFromRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
