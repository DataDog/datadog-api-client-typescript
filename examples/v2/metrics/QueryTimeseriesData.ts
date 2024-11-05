/**
 * Query timeseries data across multiple products returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiQueryTimeseriesDataRequest = {
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
        interval: 5000,
        queries: [
          {
            dataSource: "metrics",
            query: "avg:system.cpu.user{*} by {env}",
          },
        ],
        to: 1568923200000,
      },
      type: "timeseries_request",
    },
  },
};

apiInstance
  .queryTimeseriesData(params)
  .then((data: v2.TimeseriesFormulaQueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
