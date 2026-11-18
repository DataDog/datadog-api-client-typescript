/**
 * Get a segment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getProductAnalyticsSegment"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiGetProductAnalyticsSegmentRequest = {
  id: "8a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
};

apiInstance
  .getProductAnalyticsSegment(params)
  .then((data: v2.SegmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
