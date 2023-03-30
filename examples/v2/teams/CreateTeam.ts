/**
 * Create a team returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiCreateTeamRequest = {
  body: {
    data: {
      attributes: {
        handle: "1636629071",
        name: "1636629071",
      },
      relationships: {
        users: {
          data: [],
        },
      },
      type: "team",
    },
  },
};

apiInstance
  .createTeam(params)
  .then((data: v2.TeamResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
