/**
 * Decide a temporary grant request returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateTemporaryGrantRequest"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

// there is a valid "temporary_grant_request" in the system
const TEMPORARY_GRANT_REQUEST_DATA_ID = process.env
  .TEMPORARY_GRANT_REQUEST_DATA_ID as string;

const params: v2.UsageMeteringApiUpdateTemporaryGrantRequestRequest = {
  body: {
    data: {
      attributes: {
        decision: "denied",
      },
      id: TEMPORARY_GRANT_REQUEST_DATA_ID,
      type: "temporary_grant_requests",
    },
  },
  requestId: TEMPORARY_GRANT_REQUEST_DATA_ID,
};

apiInstance
  .updateTemporaryGrantRequest(params)
  .then((data: v2.TemporaryGrantRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
