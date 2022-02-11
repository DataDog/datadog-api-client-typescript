/**
 * Update a role returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
let ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

let params: v2.RolesApiUpdateRoleRequest = {
  body: {
    data: {
      id: ROLE_DATA_ID,
      type: "roles",
      attributes: {
        name: "developers-updated",
      },
    },
  },
  roleId: ROLE_DATA_ID,
};

apiInstance
  .updateRole(params)
  .then((data: v2.RoleUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
