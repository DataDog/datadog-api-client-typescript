/**
 * Query scalar data across multiple products returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryScalarData"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiQueryScalarDataRequest = {
  body: {
    data: {
      attributes: {
        formulas: [
          {
            formula: "a+b",
            limit: {
              count: 10,
              order: "desc",
            },
          },
        ],
        from: 1568899800000,
        queries: [
          {
            aggregator: "avg",
            dataSource: "metrics",
            query: "avg:system.cpu.user{*} by {env}",
          },
        ],
        to: 1568923200000,
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
