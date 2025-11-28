/**
 * Create a team hierarchy link returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

// there is a valid "dd_team_2" in the system
const DD_TEAM_2_DATA_ID = process.env.DD_TEAM_2_DATA_ID as string;

const params: v2.TeamsApiAddTeamHierarchyLinkRequest = {
  body: {
    data: {
      relationships: {
        parentTeam: {
          data: {
            id: DD_TEAM_DATA_ID,
            type: "team",
          },
        },
        subTeam: {
          data: {
            id: DD_TEAM_2_DATA_ID,
            type: "team",
          },
        },
      },
      type: "team_hierarchy_links",
    },
  },
};

apiInstance
  .addTeamHierarchyLink(params)
  .then((data: v2.TeamHierarchyLinkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
