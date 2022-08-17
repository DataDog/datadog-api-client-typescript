/**
 * Delete an existing incident team returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentTeam"] = true;
const apiInstance = new v2.IncidentTeamsApi(configuration);

// there is a valid "team" in the system
const TEAM_DATA_ID = process.env.TEAM_DATA_ID as string;

const params: v2.IncidentTeamsApiDeleteIncidentTeamRequest = {
  teamId: TEAM_DATA_ID,
};

apiInstance
  .deleteIncidentTeam(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
