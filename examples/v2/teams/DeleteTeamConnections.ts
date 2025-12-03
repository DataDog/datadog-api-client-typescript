/**
 * Delete team connections returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteTeamConnections"] = true;
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiDeleteTeamConnectionsRequest = {
  body: {
    data: [
      {
        id: "12345678-1234-5678-9abc-123456789012",
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
