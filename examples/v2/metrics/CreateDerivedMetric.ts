/**
 * Create a derived metric returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiCreateDerivedMetricRequest = {
  body: {
    data: {
      attributes: {
        definition: {
          formula: "a",
          queries: [
            {
              dataSource: "metrics",
              name: "a",
              query: "avg:system.cpu.user{*}",
            },
          ],
        },
      },
      id: "test.derived.examplemetric",
      type: "derived_metrics",
    },
  },
};

apiInstance
  .createDerivedMetric(params)
  .then((data: v2.DerivedMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
