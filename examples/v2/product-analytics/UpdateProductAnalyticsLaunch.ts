/**
 * Update a Product Analytics launch returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateProductAnalyticsLaunch"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiUpdateProductAnalyticsLaunchRequest = {
  body: {
    data: {
      attributes: {
        phase: "setup",
      },
      id: "5e3c7a1b-2d4f-4e6a-8b9c-0d1e2f3a4b5c",
      type: "liftoff",
    },
  },
  id: "5e3c7a1b-2d4f-4e6a-8b9c-0d1e2f3a4b5c",
};

apiInstance
  .updateProductAnalyticsLaunch(params)
  .then((data: v2.ProductAnalyticsLaunchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
