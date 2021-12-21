/**
 * Create an API key returns "Created" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params: v2.KeyManagementApiCreateAPIKeyRequest = {
  body: {
    data: {
      type: "api_keys",
      attributes: {
        name: "Example-Create_an_API_key_returns_Created_response",
      },
    },
  },
};

apiInstance
  .createAPIKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
