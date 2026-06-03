/**
 * Create a rum-based metric returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumMetricsApi(configuration);

const params: v2.RumMetricsApiCreateRumMetricRequest = {
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
  .createRumMetric(params)
  .then((data: v2.RumMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
