/**
 * List On-Call pages returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.OnCallApi(configuration);

const params: v2.OnCallApiListOnCallPagesRequest = {
  filterQuery: "key:1",
};

apiInstance
  .listOnCallPages(params)
  .then((data: v2.OnCallPagesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
