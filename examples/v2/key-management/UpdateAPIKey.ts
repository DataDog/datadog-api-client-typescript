/**
 * Edit an API key returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

// there is a valid "api_key" in the system
const API_KEY_DATA_ID = process.env.API_KEY_DATA_ID as string;

const params: v2.KeyManagementApiUpdateAPIKeyRequest = {
  body: {
    data: {
      type: "api_keys",
      id: API_KEY_DATA_ID,
      attributes: {
        name: "Example-Edit_an_API_key_returns_OK_response",
      },
    },
  },
  apiKeyId: API_KEY_DATA_ID,
};

apiInstance
  .updateAPIKey(params)
  .then((data: v2.APIKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
