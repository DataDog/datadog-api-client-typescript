/**
 * Create a team with V2 fields returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiCreateTeamRequest = {
  body: {
    data: {
      attributes: {
        handle: "test-handle-a0fc0297eb519635",
        name: "test-name-a0fc0297eb519635",
        avatar: "🥑",
        banner: 7,
        visibleModules: ["m1", "m2"],
        hiddenModules: ["m3"],
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
