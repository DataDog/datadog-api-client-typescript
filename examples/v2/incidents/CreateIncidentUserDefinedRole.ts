/**
 * Create an incident user-defined role returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentUserDefinedRole"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentUserDefinedRoleRequest = {
  body: {
    data: {
      attributes: {
        description: "The technical lead for the incident.",
        name: "Tech Lead",
        policy: {
          isSingle: true,
        },
      },
      relationships: {
        incidentType: {
          data: {
            id: "00000000-0000-0000-0000-000000000001",
            type: "incident_types",
          },
        },
      },
      type: "incident_user_defined_roles",
    },
  },
};

apiInstance
  .createIncidentUserDefinedRole(params)
  .then((data: v2.IncidentUserDefinedRoleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
