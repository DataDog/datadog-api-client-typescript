/**
 * Compute retention scalar values returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryProductAnalyticsRetentionScalar"] =
  true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsRetentionScalarRequest =
  {
    body: {
      data: {
        attributes: {
          excludeAnonymousTraffic: false,
          from: 1756425600000,
          query: {
            computationScope: {
              target: {
                type: "index",
                value: 0,
              },
              type: "cohort",
            },
            compute: {
              aggregation: "count",
              metric: "__dd.retention_rate",
            },
            groupBy: [
              {
                facet: "@geo.country",
                limit: 10,
                shouldExcludeMissing: false,
                sort: {
                  aggregation: "count",
                  order: "desc",
                },
                target: "cohort",
              },
            ],
            search: {
              cohortCriteria: {
                baseQuery: {
                  dataSource: "product_analytics",
                  search: {
                    query: "@type:view",
                  },
                },
                timeInterval: {
                  type: "calendar",
                  value: {
                    alignment: "monday",
                    quantity: 1,
                    timezone: "UTC",
                    type: "week",
                  },
                },
              },
              filters: {
                audienceFilters: {
                  accounts: [
                    {
                      name: "",
                    },
                  ],
                  formula: "u",
                  segments: [
                    {
                      name: "",
                      segmentId: "00000000-0000-0000-0000-000000000000",
                    },
                  ],
                  users: [
                    {
                      name: "u",
                      query: "*",
                    },
                  ],
                },
              },
              retentionEntity: "@usr.id",
              returnCondition: "conversion_on_or_after",
              returnCriteria: {
                baseQuery: {
                  dataSource: "product_analytics",
                  search: {
                    query: "@type:view",
                  },
                },
                timeInterval: {
                  type: "calendar",
                  value: {
                    alignment: "monday",
                    quantity: 1,
                    timezone: "UTC",
                    type: "week",
                  },
                },
              },
            },
          },
          to: 1756857600000,
        },
        type: "formula_retention_request",
      },
    },
  };

apiInstance
  .queryProductAnalyticsRetentionScalar(params)
  .then((data: v2.ProductAnalyticsScalarResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
