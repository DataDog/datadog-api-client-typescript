/**
 * Create client token returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v1.createClientToken"] = true;
const apiInstance = new v1.KeyManagementApi(configuration);

const params: v1.KeyManagementApiCreateClientTokenRequest = {
  body: {
    name: "Example Client Token",
    originUrls: ["https://example.com"],
  },
};

apiInstance
  .createClientToken(params)
  .then((data: v1.ClientToken) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
