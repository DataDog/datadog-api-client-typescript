/**
 * Get team hierarchy members includes inherited users with null root membership attributes
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getTeamHierarchyMembers"] = true;
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.TeamsApiGetTeamHierarchyMembersRequest = {
  teamId: DD_TEAM_DATA_ID,
  filterKeyword: "Example-Team",
  include: "user,team",
};

apiInstance
  .getTeamHierarchyMembers(params)
  .then((data: v2.TeamHierarchyMembersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
