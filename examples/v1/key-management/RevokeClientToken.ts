/**
 * Revoke client token returns "No Content" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v1.revokeClientToken"] = true;
const apiInstance = new v1.KeyManagementApi(configuration);

const params: v1.KeyManagementApiRevokeClientTokenRequest = {
  body: {
    hash: "1234567890abcdef1234567890abcdef123",
  },
};

apiInstance
  .revokeClientToken(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
