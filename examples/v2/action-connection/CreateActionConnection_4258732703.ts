/**
 * Create an Anthropic Action Connection with an AWS Secrets Manager API token
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
        name: "Anthropic Secrets Manager Connection exampleactionconnection",
        externalSecretsManager: {
          type: "aws_secrets_manager",
          connectionId: ACTION_CONNECTION_DATA_ID,
          region: "us-east-1",
        },
        integration: {
          type: "Anthropic",
          credentials: {
            type: "AnthropicAPIKey",
            apiToken: {
              type: "aws_secrets_manager",
              secretId: "example/anthropic",
              key: "api_token",
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
