/**
 * Add a member team returns "Added" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.addMemberTeam"] = true;
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiAddMemberTeamRequest = {
  body: {
    data: {
      id: "aeadc05e-98a8-11ec-ac2c-da7ad0900001",
      type: "member_teams",
    },
  },
  superTeamId: "super_team_id",
};

apiInstance
  .addMemberTeam(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
