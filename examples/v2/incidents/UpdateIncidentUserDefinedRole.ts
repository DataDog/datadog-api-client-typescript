/**
 * Update an incident user-defined role returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentUserDefinedRole"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentUserDefinedRoleRequest = {
  body: {
    data: {
      attributes: {
        description: "The technical lead for the incident.",
        name: "Tech Lead",
        policy: {
          isSingle: true,
        },
      },
      id: "00000000-0000-0000-0000-000000000002",
      type: "incident_user_defined_roles",
    },
  },
  roleId: "00000000-0000-0000-0000-000000000002",
};

apiInstance
  .updateIncidentUserDefinedRole(params)
  .then((data: v2.IncidentUserDefinedRoleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
