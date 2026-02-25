/**
 * Compute scalar analytics returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsScalarRequest = {
  body: {
    data: {
      attributes: {
        from: 1771232048460,
        query: {
          compute: {
            aggregation: "count",
          },
          query: {
            dataSource: "product_analytics",
            search: {
              query: "@type:view",
            },
          },
        },
        to: 1771836848262,
      },
      type: "formula_analytics_extended_request",
    },
  },
};

apiInstance
  .queryProductAnalyticsScalar(params)
  .then((data: v2.ProductAnalyticsScalarResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
