/**
 * Aggregate spans returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SpansApi(configuration);

const params: v2.SpansApiAggregateSpansRequest = {
  body: {
    data: {
      attributes: {
        compute: [
          {
            aggregation: "count",
            interval: "5m",
            type: "timeseries",
          },
        ],
        filter: {
          from: "now-15m",
          query: "*",
          to: "now",
        },
      },
      type: "aggregate_request",
    },
  },
};

apiInstance
  .aggregateSpans(params)
  .then((data: v2.SpansAggregateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
