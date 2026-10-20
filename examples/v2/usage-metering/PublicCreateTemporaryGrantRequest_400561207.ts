/**
 * Create a temporary grant request with a justification
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
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiPublicCreateTemporaryGrantRequestRequest = {
  body: {
    data: {
      type: "temporary_grant_requests",
      attributes: {
        total: 200,
        justification: "SDK temporary grant request test",
      },
    },
  },
};

apiInstance
  .publicCreateTemporaryGrantRequest(params)
  .then((data: v2.TemporaryGrantRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
