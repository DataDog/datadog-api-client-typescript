/**
 * Preview a segment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.previewProductAnalyticsSegment"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiPreviewProductAnalyticsSegmentRequest =
  {
    body: {
      data: {
        attributes: {
          dataQuery: {
            eventPlatform: [
              {
                facet: "@usr.id",
                from: "-2592000000",
                query: "@type:view @view.name:/logs",
                to: "0",
              },
            ],
          },
          limit: 50,
          userStoreColumns: ["user_id", "user_email", "user_name"],
        },
        type: "segment_preview_request",
      },
    },
  };

apiInstance
  .previewProductAnalyticsSegment(params)
  .then((data: v2.SegmentPreviewResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
