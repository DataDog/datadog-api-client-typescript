/**
 * Update a GitHub App Action Connection without replacing its secret
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

// there is a valid "github_app_action_connection" in the system
const GITHUB_APP_ACTION_CONNECTION_DATA_ID = process.env
  .GITHUB_APP_ACTION_CONNECTION_DATA_ID as string;

const params: v2.ActionConnectionApiUpdateActionConnectionRequest = {
  body: {
    data: {
      type: "action_connection",
      attributes: {
        name: "GitHub App Updated exampleactionconnection",
        integration: {
          type: "Github",
          credentials: {
            type: "GithubApp",
            hostname: "github.updated.example.com",
          },
        },
      },
    },
  },
  connectionId: GITHUB_APP_ACTION_CONNECTION_DATA_ID,
};

apiInstance
  .updateActionConnection(params)
  .then((data: v2.UpdateActionConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
