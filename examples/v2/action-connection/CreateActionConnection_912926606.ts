/**
 * Create a new Action Connection with HTTPTokenAuth returns "Successfully created Action Connection" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionConnectionApi(configuration);

const params: v2.ActionConnectionApiCreateActionConnectionRequest = {
  body: {
    data: {
      type: "action_connection",
      attributes: {
        name: "HTTP Token Connection exampleactionconnection",
        integration: {
          type: "HTTP",
          baseUrl: "https://api.example.com",
          credentials: {
            type: "HTTPTokenAuth",
            tokens: [
              {
                name: "ApiKey",
                type: "SECRET",
                value: "secret-token-value",
              },
            ],
            headers: [
              {
                name: "Authorization",
                value: "Bearer token-value",
              },
            ],
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
