/**
 * Create a team link returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.TeamsApiCreateTeamLinkRequest = {
  body: {
    data: {
      attributes: {
        label: "Link label",
        url: "https://example.com",
        position: 0,
      },
      type: "team_links",
    },
  },
  teamId: DD_TEAM_DATA_ID,
};

apiInstance
  .createTeamLink(params)
  .then((data: v2.TeamLinkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
