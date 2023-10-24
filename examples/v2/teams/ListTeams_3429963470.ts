/**
 * Get all teams with fields_team parameter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiListTeamsRequest = {
  fieldsTeam: ["id", "name", "handle"],
};

apiInstance
  .listTeams(params)
  .then((data: v2.TeamsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
