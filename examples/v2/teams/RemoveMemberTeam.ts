/**
 * Remove a member team returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.removeMemberTeam"] = true;
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiRemoveMemberTeamRequest = {
  superTeamId: "super_team_id",
  memberTeamId: "member_team_id",
};

apiInstance
  .removeMemberTeam(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
