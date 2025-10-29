/**
 * Create rum segment returns "Segment created successfully" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createRumSegment"] = true;
const apiInstance = new v2.SegmentsApi(configuration);

const params: v2.SegmentsApiCreateRumSegmentRequest = {
  body: {
    data: {
      attributes: {
        createdAt: new Date(1, 1, 1, 0, 0, 0, 0),
        createdBy: {
          handle: "",
          id: "",
          uuid: "",
        },
        dataQuery: {
          eventPlatform: [
            {
              facet: "@usr.id",
              from: "2025-08-01",
              name: "high_value_users",
              query:
                "@type:view @view.name:/logs @usr.session_duration:>300000",
              to: "2025-09-01",
            },
          ],
        },
        description:
          "Users who frequently visit logs and have high session duration",
        modifiedAt: new Date(1, 1, 1, 0, 0, 0, 0),
        modifiedBy: {
          handle: "",
          id: "",
          uuid: "",
        },
        name: "High-Value Users",
        orgId: 123456,
        source: 0,
        tags: ["high-value", "logs", "active"],
        version: 1,
      },
      id: "segment-12345",
      type: "segment",
    },
  },
};

apiInstance
  .createRumSegment(params)
  .then((data: v2.Segment) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
