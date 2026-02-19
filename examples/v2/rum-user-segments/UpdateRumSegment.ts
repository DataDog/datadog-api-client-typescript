/**
 * Update a RUM segment returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateRumSegment"] = true;
const apiInstance = new v2.RUMUserSegmentsApi(configuration);

const params: v2.RUMUserSegmentsApiUpdateRumSegmentRequest = {
  body: {
    data: {
      attributes: {
        dataQuery: {
          combination: "(logs && apm_home) && NOT(apm_trace)",
          eventPlatforms: [
            {
              facet: "@usr.id",
              from: 1709888355000,
              name: "logs",
              query: "@type:view @view.url_path:/logs",
              to: 1710493155000,
            },
          ],
          journeys: [
            {
              conversionType: "any",
              groupBy: "@usr.id",
              name: "my_journey",
              search: "@type:view",
            },
          ],
          referenceTables: [
            {
              columns: [
                {
                  name: "user_id",
                },
              ],
              filterQuery: "",
              joinCondition: {
                columnName: "user_id",
                facet: "@usr.id",
              },
              name: "my_ref_table",
              tableName: "my_table",
            },
          ],
          _static: [
            {
              id: "static-list-1",
              name: "My Static List",
              userCount: 500,
            },
          ],
          templates: [
            {
              from: 1709888355000,
              parameters: {
                threshold: "5",
              },
              templateId: "stickiness-v1",
              to: 1710493155000,
            },
          ],
        },
        description: "Updated description.",
        name: "Updated Segment Name",
        tags: ["team:backend"],
      },
      id: "a1b2c3d4-1234-5678-9abc-123456789abc",
      type: "segment",
    },
  },
  segmentId: "a1b2c3d4-1234-5678-9abc-123456789abc",
};

apiInstance
  .updateRumSegment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
