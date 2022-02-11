/**
 * Revoke permission returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
let ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

// there is a valid "permission" in the system
let PERMISSION_ID = process.env.PERMISSION_ID as string;

let params: v2.RolesApiRemovePermissionFromRoleRequest = {
  body: {
    data: {
      id: PERMISSION_ID,
      type: "permissions",
    },
  },
  roleId: ROLE_DATA_ID,
};

apiInstance
  .removePermissionFromRole(params)
  .then((data: v2.PermissionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
