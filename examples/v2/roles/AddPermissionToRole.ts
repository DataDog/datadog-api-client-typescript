/**
 * Grant permission to a role returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
let ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

// there is a valid "permission" in the system

let params: v2.RolesApiAddPermissionToRoleRequest = {
  body: {
    data: {
      id: "9f53ba50-00a3-2191-1678-eca210194440",
      type: "permissions",
    },
  },
  roleId: ROLE_DATA_ID,
};

apiInstance
  .addPermissionToRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
