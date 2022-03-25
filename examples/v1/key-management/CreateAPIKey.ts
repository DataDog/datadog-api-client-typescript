/**
 * Create an API key returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

const params: v1.KeyManagementApiCreateAPIKeyRequest = {
  body: {
    name: "example user",
  },
};

apiInstance
  .createAPIKey(params)
  .then((data: v1.ApiKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
