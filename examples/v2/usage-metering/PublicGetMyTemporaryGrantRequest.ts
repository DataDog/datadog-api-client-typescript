/**
 * Get your temporary grant request returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.publicGetMyTemporaryGrantRequest"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiPublicGetMyTemporaryGrantRequestRequest = {
  requestId: "12345678-1234-1234-1234-123456789012",
};

apiInstance
  .publicGetMyTemporaryGrantRequest(params)
  .then((data: v2.TemporaryGrantRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
