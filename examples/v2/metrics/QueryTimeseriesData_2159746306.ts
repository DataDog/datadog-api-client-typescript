/**
 * Timeseries cross product query with process data source returns "OK" response
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
            formula: "a",
            limit: {
              count: 10,
              order: "desc",
            },
          },
        ],
        from: 1636625471000,
        interval: 5000,
        queries: [
          {
            dataSource: "process",
            name: "a",
            metric: "process.stat.cpu.total_pct",
            textFilter: "",
            tagFilters: [],
            limit: 10,
            sort: "desc",
            isNormalizedCpu: false,
          },
        ],
        to: 1636629071000,
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
