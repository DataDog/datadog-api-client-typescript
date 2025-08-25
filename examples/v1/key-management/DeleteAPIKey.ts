/**
 * Delete an API key returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

const params: v1.KeyManagementApiDeleteAPIKeyRequest = {
  key: "key",
};

apiInstance
  .deleteAPIKey(params)
  .then((data: v1.ApiKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
