/**
 * List role templates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listRoleTemplates"] = true;
const apiInstance = new v2.RolesApi(configuration);

apiInstance
  .listRoleTemplates()
  .then((data: v2.RoleTemplateArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
