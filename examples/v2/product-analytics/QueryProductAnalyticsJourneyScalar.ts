/**
 * Compute journey scalar analytics returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryProductAnalyticsJourneyScalar"] =
  true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsJourneyScalarRequest =
  {
    body: {
      data: {
        attributes: {
          from: 1756425600000,
          query: {
            compute: {
              aggregation: "count",
              target: {
                type: "node",
                value: "A",
              },
            },
            groupBy: [
              {
                facet: "@geo.country",
                shouldExcludeMissing: false,
                sort: {
                  aggregation: "count",
                  order: "desc",
                },
                source: "product_analytics_audience_filters.users",
                target: {
                  type: "node",
                  value: "A",
                },
                valueFilters: [],
              },
            ],
            search: {
              expression: "A -> B",
              filters: {
                audienceFilters: {
                  accounts: [
                    {
                      name: "enterprise_accounts",
                    },
                  ],
                  formula: "power_users AND NOT trial_segment",
                  segments: [
                    {
                      name: "trial_segment",
                      segmentId: "00000000-0000-0000-0000-000000000000",
                    },
                  ],
                  users: [
                    {
                      name: "power_users",
                    },
                  ],
                },
                graphFilters: [
                  {
                    name: "__dd.time_to_convert",
                    operator: "<=",
                    target: {
                      type: "node",
                      value: "A",
                    },
                    value: 60000,
                  },
                ],
              },
              joinKeys: {
                primary: "@session.id",
                secondary: [],
              },
              nodeObjects: {
                A: {
                  dataSource: "product_analytics",
                  search: {
                    query: "@type:view @view.name:Login",
                  },
                },
                B: {
                  dataSource: "product_analytics",
                  search: {
                    query: "@type:action @action.target.name:Submit",
                  },
                },
              },
            },
          },
          to: 1756857600000,
        },
        type: "formula_journey_request",
      },
    },
  };

apiInstance
  .queryProductAnalyticsJourneyScalar(params)
  .then((data: v2.ProductAnalyticsJourneyScalarResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
