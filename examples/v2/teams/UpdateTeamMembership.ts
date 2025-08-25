/**
 * Update a user's membership attributes on a team returns "Represents a user's association to a team" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiUpdateTeamMembershipRequest = {
  body: {
    data: {
      attributes: {
        role: "admin",
      },
      type: "team_memberships",
    },
  },
  teamId: "team_id",
  userId: "user_id",
};

apiInstance
  .updateTeamMembership(params)
  .then((data: v2.UserTeamResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
