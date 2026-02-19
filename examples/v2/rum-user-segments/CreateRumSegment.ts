/**
 * Create a RUM segment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createRumSegment"] = true;
const apiInstance = new v2.RUMUserSegmentsApi(configuration);

const params: v2.RUMUserSegmentsApiCreateRumSegmentRequest = {
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
        description: "Users who visited the homepage.",
        name: "My Segment",
        tags: ["team:frontend"],
      },
      type: "segment",
    },
  },
};

apiInstance
  .createRumSegment(params)
  .then((data: v2.RumSegmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
