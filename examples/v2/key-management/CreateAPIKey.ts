/**
 * Create an API key returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.KeyManagementApi(configuration);

const params: v2.KeyManagementApiCreateAPIKeyRequest = {
  body: {
    data: {
      type: "api_keys",
      attributes: {
        name: "Example-Key-Management",
      },
    },
  },
};

apiInstance
  .createAPIKey(params)
  .then((data: v2.APIKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
