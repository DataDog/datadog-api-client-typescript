/**
 * List analytics events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryProductAnalyticsList"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsListRequest = {
  body: {
    data: {
      attributes: {
        from: 1771232048460,
        query: {
          columns: ["@view.name"],
          limit: 100,
          query: {
            dataSource: "product_analytics",
            search: {
              query: "@type:view",
            },
          },
        },
        to: 1771836848262,
      },
      type: "formula_analytics_extended_list_request",
    },
  },
};

apiInstance
  .queryProductAnalyticsList(params)
  .then((data: v2.ProductAnalyticsAnalyticsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
