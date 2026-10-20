/**
 * List your pending temporary grant requests
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.publicListMyTemporaryGrantRequests"] =
  true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiPublicListMyTemporaryGrantRequestsRequest = {
  filterStatus: "pending",
  pageLimit: 1,
};

apiInstance
  .publicListMyTemporaryGrantRequests(params)
  .then((data: v2.TemporaryGrantRequestListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
