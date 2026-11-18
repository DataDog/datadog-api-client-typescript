/**
 * Create a segment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createProductAnalyticsSegment"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiCreateProductAnalyticsSegmentRequest =
  {
    body: {
      data: {
        attributes: {
          dataQuery: {
            eventPlatform: [
              {
                facet: "@usr.id",
                from: "-2592000000",
                name: "viewed_logs",
                query: "@type:view @view.name:/logs",
                to: "0",
              },
            ],
          },
          description: "Users who viewed the logs page in the last 30 days.",
          name: "High-value users",
          tags: ["team:growth"],
        },
        type: "segment",
      },
    },
  };

apiInstance
  .createProductAnalyticsSegment(params)
  .then((data: v2.SegmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
