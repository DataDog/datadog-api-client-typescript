/**
 * Create role returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiCreateRoleRequest = {
  body: {
    data: {
      type: "roles",
      attributes: {
        name: "Test-Example-Create_role_returns_OK_response",
      },
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
