/**
 * Create role with a permission returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "permission" in the system
const PERMISSION_ID = process.env.PERMISSION_ID as string;

const params: v2.RolesApiCreateRoleRequest = {
  body: {
    data: {
      type: "roles",
      attributes: {
        name: "Example-Role",
      },
      relationships: {
        permissions: {
          data: [
            {
              id: PERMISSION_ID,
              type: "permissions",
            },
          ],
        },
      },
    },
  },
};

apiInstance
  .createRole(params)
  .then((data: v2.RoleCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
