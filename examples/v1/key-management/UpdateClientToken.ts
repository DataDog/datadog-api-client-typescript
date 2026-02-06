/**
 * Update client token returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v1.updateClientToken"] = true;
const apiInstance = new v1.KeyManagementApi(configuration);

const params: v1.KeyManagementApiUpdateClientTokenRequest = {
  body: {
    hash: "1234567890abcdef1234567890abcdef123",
    name: "Updated Client Token Name",
    originUrls: ["https://example.com"],
  },
};

apiInstance
  .updateClientToken(params)
  .then((data: v1.ClientToken) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
