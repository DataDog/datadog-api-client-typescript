/**
 * Get a GitHub personal access token Action Connection
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ActionConnectionApi(configuration);

// there is a valid "github_pat_action_connection" in the system
const GITHUB_PAT_ACTION_CONNECTION_DATA_ID = process.env
  .GITHUB_PAT_ACTION_CONNECTION_DATA_ID as string;

const params: v2.ActionConnectionApiGetActionConnectionRequest = {
  connectionId: GITHUB_PAT_ACTION_CONNECTION_DATA_ID,
};

apiInstance
  .getActionConnection(params)
  .then((data: v2.GetActionConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
