/**
 * Create a GitHub personal access token Action Connection
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

const params: v2.ActionConnectionApiCreateActionConnectionRequest = {
  body: {
    data: {
      type: "action_connection",
      attributes: {
        name: "GitHub personal access token Connection exampleactionconnection",
        integration: {
          type: "Github",
          credentials: {
            type: "GithubPersonalAccessToken",
            accessToken: "example-token",
            hostname: "github.example.com",
          },
        },
      },
    },
  },
};

apiInstance
  .createActionConnection(params)
  .then((data: v2.CreateActionConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
