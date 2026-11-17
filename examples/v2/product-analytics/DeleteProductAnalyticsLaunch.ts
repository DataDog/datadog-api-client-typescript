/**
 * Delete a Product Analytics launch returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteProductAnalyticsLaunch"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiDeleteProductAnalyticsLaunchRequest = {
  id: "5e3c7a1b-2d4f-4e6a-8b9c-0d1e2f3a4b5c",
};

apiInstance
  .deleteProductAnalyticsLaunch(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
