/**
 * Update a GitHub personal access token Action Connection without replacing its secret
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

const params: v2.ActionConnectionApiUpdateActionConnectionRequest = {
  body: {
    data: {
      type: "action_connection",
      attributes: {
        name: "GitHub personal access token Updated exampleactionconnection",
        integration: {
          type: "Github",
          credentials: {
            type: "GithubPersonalAccessToken",
            hostname: "github.updated.example.com",
          },
        },
      },
    },
  },
  connectionId: GITHUB_PAT_ACTION_CONNECTION_DATA_ID,
};

apiInstance
  .updateActionConnection(params)
  .then((data: v2.UpdateActionConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
