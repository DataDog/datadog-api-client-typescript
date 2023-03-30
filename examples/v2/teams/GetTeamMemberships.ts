/**
 * Get team memberships returns "Represents a user's association to a team" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.TeamsApiGetTeamMembershipsRequest = {
  teamId: DD_TEAM_DATA_ID,
};

apiInstance
  .getTeamMemberships(params)
  .then((data: v2.UserTeamsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
