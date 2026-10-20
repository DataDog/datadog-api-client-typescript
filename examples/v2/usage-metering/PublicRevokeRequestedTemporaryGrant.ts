/**
 * Revoke a requested temporary grant returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.publicRevokeRequestedTemporaryGrant"] =
  true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiPublicRevokeRequestedTemporaryGrantRequest = {
  requestId: "12345678-1234-1234-1234-123456789012",
};

apiInstance
  .publicRevokeRequestedTemporaryGrant(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
