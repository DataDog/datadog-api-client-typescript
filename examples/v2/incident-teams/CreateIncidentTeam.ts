/**
 * Create a new incident team returns "CREATED" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["createIncidentTeam"] = true;
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params: v2.IncidentTeamsApiCreateIncidentTeamRequest = {
  body: {
    data: {
      type: "teams",
      attributes: {
        name: "Example-Create_a_new_incident_team_returns_CREATED_response",
      },
    },
  },
};

apiInstance
  .createIncidentTeam(params)
  .then((data: v2.IncidentTeamResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
