/**
 * Create a temporary grant request returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createTemporaryGrantRequest"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiCreateTemporaryGrantRequestRequest = {
  body: {
    data: {
      attributes: {
        expiresAt: new Date(2028, 2, 16, 0, 0, 0, 0),
        justification: "Credits needed to finish the incident investigation.",
        total: 200,
      },
      type: "temporary_grant_requests",
    },
  },
};

apiInstance
  .createTemporaryGrantRequest(params)
  .then((data: v2.TemporaryGrantRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
