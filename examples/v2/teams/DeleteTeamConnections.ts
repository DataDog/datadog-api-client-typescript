/**
 * Delete team connections returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

// there is a valid "team_connection" in the system
const TEAM_CONNECTION_ID = process.env.TEAM_CONNECTION_ID as string;

const params: v2.TeamsApiDeleteTeamConnectionsRequest = {
  body: {
    data: [
      {
        id: TEAM_CONNECTION_ID,
        type: "team_connection",
      },
    ],
  },
};

apiInstance
  .deleteTeamConnections(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
