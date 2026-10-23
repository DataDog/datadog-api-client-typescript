/**
 * Get On-Call page returns "OK" response
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

const params: v2.OnCallApiGetOnCallPageRequest = {
  pageId: "f63eb677-07ce-46ab-b2e0-80ca1ffe91bf",
};

apiInstance
  .getOnCallPage(params)
  .then((data: v2.OnCallPageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
