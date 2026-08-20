/**
 * Compute a Sankey diagram returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryProductAnalyticsSankey"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsSankeyRequest = {
  body: {
    data: {
      attributes: {
        definition: {
          entriesPerStep: 10,
          numberOfSteps: 3,
          source: "@view.name",
          target: "@view.name",
        },
        search: {
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
          joinKeys: {
            primary: "@session.id",
            secondary: [],
          },
          query: "@type:view",
        },
        time: {
          from: 1756425600000,
          to: 1756857600000,
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
