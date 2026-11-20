/**
 * Create a RUM-based metric returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMMetricsApi(configuration);

const params: v2.RUMMetricsApiCreateRUMMetricRequest = {
  body: {
    data: {
      attributes: {
        compute: {
          aggregationType: "distribution",
          includePercentiles: true,
          path: "@duration",
        },
        eventType: "session",
        filter: {
          query: "@service:web-ui",
        },
        groupBy: [
          {
            path: "@browser.name",
            tagName: "browser_name",
          },
        ],
        uniqueness: {
          when: "match",
        },
      },
      id: "examplerummetric",
      type: "rum_metrics",
    },
  },
};

apiInstance
  .createRUMMetric(params)
  .then((data: v2.RUMMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
