import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiCreateRoleRequest = {
  // RoleCreateRequest
  body: {
    data: {
      attributes: {
        name: "developers",
      },
      relationships: {
        permissions: {
          data: [
            {
              id: "id_example",
              type: "permissions",
            },
          ],
        },
        users: {
          data: [
            {
              id: "00000000-0000-0000-0000-000000000000",
              type: "users",
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
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
