/**
 * List incident responders includes users and role assignments
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createIncident"] = true;
configuration.unstableOperations["v2.listIncidentResponders"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident_with_commander" in the system
const INCIDENT_WITH_COMMANDER_DATA_ID = process.env
  .INCIDENT_WITH_COMMANDER_DATA_ID as string;

const params: v2.IncidentsApiListIncidentRespondersRequest = {
  incidentId: INCIDENT_WITH_COMMANDER_DATA_ID,
  include: ["users", "role_assignments"],
};

apiInstance
  .listIncidentResponders(params)
  .then((data: v2.IncidentRespondersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
