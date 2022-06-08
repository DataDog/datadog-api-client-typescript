/**
 * Revoke permission returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
const ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

// there is a valid "permission" in the system
const PERMISSION_ID = process.env.PERMISSION_ID as string;

const params: v2.RolesApiRemovePermissionFromRoleRequest = {
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
