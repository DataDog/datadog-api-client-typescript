/**
 * Create a new incident team returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentTeam"] = true;
const apiInstance = new v2.IncidentTeamsApi(configuration);

const params: v2.IncidentTeamsApiCreateIncidentTeamRequest = {
  body: {
    data: {
      type: "teams",
      attributes: {
        name: "Example-Incident-Team",
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
