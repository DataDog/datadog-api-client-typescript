/**
 * Create a GCP Action Connection with AWS Secrets Manager references
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
        name: "GCP Secrets Manager Connection exampleactionconnection",
        externalSecretsManager: {
          type: "aws_secrets_manager",
          connectionId: ACTION_CONNECTION_DATA_ID,
          region: "us-east-1",
        },
        integration: {
          type: "GCP",
          credentials: {
            type: "GCPServiceAccount",
            privateKey: {
              type: "aws_secrets_manager",
              secretId: "example/gcp/service-account",
              key: "private_key",
            },
            serviceAccountEmail: {
              type: "aws_secrets_manager",
              secretId: "example/gcp/service-account",
              key: "client_email",
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
