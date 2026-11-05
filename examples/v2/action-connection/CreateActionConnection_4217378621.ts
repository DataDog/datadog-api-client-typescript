/**
 * Create an HTTP Action Connection with an AWS Secrets Manager token
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

// there is a valid "action_connection" in the system
const ACTION_CONNECTION_DATA_ID = process.env
  .ACTION_CONNECTION_DATA_ID as string;

const params: v2.ActionConnectionApiCreateActionConnectionRequest = {
  body: {
    data: {
      type: "action_connection",
      attributes: {
        name: "HTTP Secrets Manager Connection exampleactionconnection",
        externalSecretsManager: {
          type: "aws_secrets_manager",
          connectionId: ACTION_CONNECTION_DATA_ID,
          region: "us-east-1",
        },
        integration: {
          type: "HTTP",
          baseUrl: "https://example.com",
          credentials: {
            type: "HTTPTokenAuth",
            tokens: [
              {
                name: "token",
                type: "SECRET",
                value: {
                  type: "aws_secrets_manager",
                  secretId: "example/http",
                  key: "token",
                },
              },
            ],
            headers: [
              {
                name: "ApiKey",
                value: "literal-value",
              },
            ],
            urlParameters: [
              {
                name: "apiKey",
                value: "literal-value",
              },
            ],
            body: {
              contentType: "application/json",
              content: `{"example":"literal"}`,
            },
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
