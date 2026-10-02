/**
 * Create metric returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

const params: v2.ExperimentsApiCreateMetricRequest = {
  body: {
    data: {
      type: "metrics",
      attributes: {
        name: "ex-14bb9543f523edde",
        dataSourceType: "DATADOG",
        desiredChange: "METRIC_INCREASES",
        numeratorAggregation: {
          operation: "sum",
          datadogMetricMeasure: {
            name: "ex-14bb9543f523edde view duration",
            sourceType: "PRODUCT_ANALYTICS",
            sourceSubtype: "RUM_VIEWS",
            columnType: "double",
            columnName: "@view.time_spent",
          },
        },
      },
    },
  },
};

apiInstance
  .createMetric(params)
  .then((data: v2.ExperimentsMetricV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
