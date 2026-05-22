/**
 * Get an incident reserved role returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentReservedRole"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentReservedRoleRequest = {
  roleId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .getIncidentReservedRole(params)
  .then((data: v2.IncidentReservedRoleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
