import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params: v2.IncidentTeamsApiCreateIncidentTeamRequest = {
  // IncidentTeamCreateRequest | Incident Team Payload.
  body: {
    data: {
      attributes: {
        name: "team name",
      },
      type: "teams",
    },
  },
};

apiInstance
  .createIncidentTeam(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
