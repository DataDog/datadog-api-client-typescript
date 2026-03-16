/**
 * Compute Sankey flow analysis returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsSankeyRequest = {
  body: {
    data: {
      attributes: {
        dataSource: "product_analytics",
        definition: {
          entriesPerStep: 5,
          numberOfSteps: 5,
          source: "/logs",
          target: "",
        },
        search: {
          joinKeys: {
            primary: "@session.id",
          },
          query: "@type:view",
        },
        time: {
          from: 1771232048460,
          to: 1771836848262,
        },
      },
      type: "sankey_request",
    },
  },
};

apiInstance
  .queryProductAnalyticsSankey(params)
  .then((data: v2.ProductAnalyticsSankeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
