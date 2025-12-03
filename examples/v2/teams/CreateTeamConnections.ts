/**
 * Create team connections returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createTeamConnections"] = true;
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.TeamsApiCreateTeamConnectionsRequest = {
  body: {
    data: [
      {
        type: "team_connection",
        attributes: {
          source: "github",
          managedBy: "datadog",
        },
        relationships: {
          team: {
            data: {
              id: DD_TEAM_DATA_ID,
              type: "team",
            },
          },
          connectedTeam: {
            data: {
              id: "@MyGitHubAccount/my-team-name",
              type: "github_team",
            },
          },
        },
      },
    ],
  },
};

apiInstance
  .createTeamConnections(params)
  .then((data: v2.TeamConnectionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
