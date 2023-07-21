/**
 * Timeseries cross product query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryTimeseriesData"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiQueryTimeseriesDataRequest = {
  body: {
    data: {
      attributes: {
        formulas: [
          {
            formula: "a",
          },
        ],
        from: 1671612804000,
        interval: 5000,
        queries: [
          {
            dataSource: "metrics",
            query: "avg:system.cpu.user{*}",
            name: "a",
          },
        ],
        to: 1671620004000,
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
