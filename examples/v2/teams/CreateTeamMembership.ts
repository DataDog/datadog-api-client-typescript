/**
 * Add a user to a team returns "Represents a user's association to a team" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiCreateTeamMembershipRequest = {
  body: {
    data: {
      attributes: {
        role: "admin",
      },
      relationships: {
        team: {
          data: {
            id: "d7e15d9d-d346-43da-81d8-3d9e71d9a5e9",
            type: "team",
          },
        },
        user: {
          data: {
            id: "b8626d7e-cedd-11eb-abf5-da7ad0900001",
            type: "users",
          },
        },
      },
      type: "team_memberships",
    },
  },
  teamId: "team_id",
};

apiInstance
  .createTeamMembership(params)
  .then((data: v2.UserTeamResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
