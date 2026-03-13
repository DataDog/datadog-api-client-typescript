/**
 * Create a static RUM segment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createRumStaticSegment"] = true;
const apiInstance = new v2.RUMUserSegmentsApi(configuration);

const params: v2.RUMUserSegmentsApiCreateRumStaticSegmentRequest = {
  body: {
    data: {
      attributes: {
        description: "Users from a specific journey.",
        journeyQueryObject: {
          nodes: [
            {
              filters: [
                {
                  attribute: "@type",
                  value: "view",
                },
              ],
            },
          ],
        },
        name: "My Static Segment",
        tags: ["team:frontend"],
      },
      type: "create_static_segment_request",
    },
  },
};

apiInstance
  .createRumStaticSegment(params)
  .then((data: v2.RumSegmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
