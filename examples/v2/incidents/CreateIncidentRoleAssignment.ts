/**
 * Create an incident role assignment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentRoleAssignment"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentRoleAssignmentRequest = {
  body: {
    data: {
      attributes: {
        role: "commander",
      },
      relationships: {
        reservedRole: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "incident_reserved_roles",
          },
        },
        responder: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
        userDefinedRole: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "incident_reserved_roles",
          },
        },
      },
      type: "incident_role_assignments",
    },
  },
};

apiInstance
  .createIncidentRoleAssignment(params)
  .then((data: v2.IncidentRoleAssignmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
