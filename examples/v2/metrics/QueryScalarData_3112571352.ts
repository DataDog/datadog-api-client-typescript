/**
 * Scalar cross product query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiQueryScalarDataRequest = {
  body: {
    data: {
      attributes: {
        formulas: [
          {
            formula: "a",
            limit: {
              count: 10,
              order: "desc",
            },
          },
        ],
        from: 1636625471000,
        queries: [
          {
            aggregator: "avg",
            dataSource: "metrics",
            query: "avg:system.cpu.user{*}",
            name: "a",
          },
        ],
        to: 1636629071000,
      },
      type: "scalar_request",
    },
  },
};

apiInstance
  .queryScalarData(params)
  .then((data: v2.ScalarFormulaQueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
