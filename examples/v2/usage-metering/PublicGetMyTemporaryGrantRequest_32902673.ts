/**
 * Read an owned temporary grant request
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.publicCreateTemporaryGrantRequest"] = true;
configuration.unstableOperations["v2.publicGetMyTemporaryGrantRequest"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

// there is a valid "temporary_grant_request" in the system
const TEMPORARY_GRANT_REQUEST_DATA_ID = process.env
  .TEMPORARY_GRANT_REQUEST_DATA_ID as string;

const params: v2.UsageMeteringApiPublicGetMyTemporaryGrantRequestRequest = {
  requestId: TEMPORARY_GRANT_REQUEST_DATA_ID,
};

apiInstance
  .publicGetMyTemporaryGrantRequest(params)
  .then((data: v2.TemporaryGrantRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
