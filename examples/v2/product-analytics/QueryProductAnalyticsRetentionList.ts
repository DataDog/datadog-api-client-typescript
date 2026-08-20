/**
 * List the entities behind a retention cell returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryProductAnalyticsRetentionList"] =
  true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsRetentionListRequest =
  {
    body: {
      data: {
        attributes: {
          from: 1756425600000,
          query: {
            columns: [
              {
                field: {
                  path: "@usr.email",
                },
              },
            ],
            computationScope: {
              cohortTarget: {
                type: "index",
                value: 0,
              },
              returnPeriodTarget: {
                type: "index",
                value: 0,
              },
              type: "cell",
            },
            limit: 100,
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
        type: "retention_list_request",
      },
    },
  };

apiInstance
  .queryProductAnalyticsRetentionList(params)
  .then((data: v2.ProductAnalyticsRetentionListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
