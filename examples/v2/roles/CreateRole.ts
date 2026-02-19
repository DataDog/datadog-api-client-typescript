/**
 * Create role returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

const params: v2.RolesApiCreateRoleRequest = {
  body: {
    data: {
      attributes: {
        name: "developers",
        receivesPermissionsFrom: [],
      },
      relationships: {
        permissions: {
          data: [
            {
              type: "permissions",
            },
          ],
        },
      },
      type: "roles",
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
