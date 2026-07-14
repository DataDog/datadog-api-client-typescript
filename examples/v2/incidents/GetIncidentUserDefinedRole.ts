/**
 * Get an incident user-defined role returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentUserDefinedRole"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentUserDefinedRoleRequest = {
  roleId: "00000000-0000-0000-0000-000000000002",
};

apiInstance
  .getIncidentUserDefinedRole(params)
  .then((data: v2.IncidentUserDefinedRoleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
