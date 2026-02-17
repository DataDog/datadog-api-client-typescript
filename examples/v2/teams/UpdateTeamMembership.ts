/**
 * Update a user's membership attributes on a team returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.TeamsApiUpdateTeamMembershipRequest = {
  body: {
    data: {
      attributes: {
        role: "admin",
      },
      type: "team_memberships",
    },
  },
  teamId: DD_TEAM_DATA_ID,
  userId: USER_DATA_ID,
};

apiInstance
  .updateTeamMembership(params)
  .then((data: v2.UserTeamResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
