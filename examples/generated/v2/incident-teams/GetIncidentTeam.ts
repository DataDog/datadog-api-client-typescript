import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params: v2.IncidentTeamsApiGetIncidentTeamRequest = {
  // string | The ID of the incident team.
  teamId: "team_id_example",
  // IncidentRelatedObject | Specifies which types of related objects should be included in the response. (optional)
  include: "users",
};

apiInstance
  .getIncidentTeam(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
