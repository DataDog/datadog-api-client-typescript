/**
 * Remove a team link returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

// there is a valid "team_link" in the system
const TEAM_LINK_DATA_ID = process.env.TEAM_LINK_DATA_ID as string;

const params: v2.TeamsApiDeleteTeamLinkRequest = {
  teamId: DD_TEAM_DATA_ID,
  linkId: TEAM_LINK_DATA_ID,
};

apiInstance
  .deleteTeamLink(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
