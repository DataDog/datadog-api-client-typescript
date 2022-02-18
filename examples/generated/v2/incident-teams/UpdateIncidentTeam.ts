import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params: v2.IncidentTeamsApiUpdateIncidentTeamRequest = {
  // string | The ID of the incident team.
  teamId: "team_id_example",
  // IncidentTeamUpdateRequest | Incident Team Payload.
  body: {
    data: {
      attributes: {
        name: "team name",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "teams",
    },
  },
};

apiInstance
  .updateIncidentTeam(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
