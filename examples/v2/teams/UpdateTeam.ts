/**
 * Update a team returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ATTRIBUTES_HANDLE = process.env
  .DD_TEAM_DATA_ATTRIBUTES_HANDLE as string;
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.TeamsApiUpdateTeamRequest = {
  body: {
    data: {
      attributes: {
        handle: DD_TEAM_DATA_ATTRIBUTES_HANDLE,
        name: "Example Team updated",
        avatar: "🥑",
        banner: 7,
        hiddenModules: ["m3"],
        visibleModules: ["m1", "m2"],
      },
      type: "team",
    },
  },
  teamId: DD_TEAM_DATA_ID,
};

apiInstance
  .updateTeam(params)
  .then((data: v2.TeamResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
