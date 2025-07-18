/**
 * Get all member teams returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listMemberTeams"] = true;
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiListMemberTeamsRequest = {
  superTeamId: "super_team_id",
};

apiInstance
  .listMemberTeams(params)
  .then((data: v2.TeamsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
