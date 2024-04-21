/**
 * Create role with a permission returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

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
              id: "d90f6831-d3d8-11e9-a77a-4fd230ddbc6a",
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
