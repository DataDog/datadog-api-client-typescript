/**
 * Update an existing incident team returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

// there is a valid "team" in the system
let TEAM_DATA_ID = process.env.TEAM_DATA_ID as string;

let params: v2.IncidentTeamsApiUpdateIncidentTeamRequest = {
  body: {
    data: {
      type: "teams",
      attributes: {
        name: "team name-updated",
      },
    },
  },
  teamId: TEAM_DATA_ID,
};

apiInstance
  .updateIncidentTeam(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
