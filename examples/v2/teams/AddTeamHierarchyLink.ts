/**
 * Create a team hierarchy link returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiAddTeamHierarchyLinkRequest = {
  body: {
    data: {
      relationships: {
        parentTeam: {
          data: {
            id: "692e8073-12c4-4c71-8408-5090bd44c9c8",
            type: "team",
          },
        },
        subTeam: {
          data: {
            id: "692e8073-12c4-4c71-8408-5090bd44c9c8",
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
