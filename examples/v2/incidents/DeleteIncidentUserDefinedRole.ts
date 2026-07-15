/**
 * Delete an incident user-defined role returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentUserDefinedRole"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiDeleteIncidentUserDefinedRoleRequest = {
  roleId: "00000000-0000-0000-0000-000000000002",
};

apiInstance
  .deleteIncidentUserDefinedRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
