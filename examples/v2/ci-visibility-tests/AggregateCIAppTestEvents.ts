/**
 * Aggregate tests events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityTestsApi(configuration);

const params: v2.CIVisibilityTestsApiAggregateCIAppTestEventsRequest = {
  body: {
    compute: [
      {
        aggregation: "count",
        metric: "@test.is_flaky",
        type: "total",
      },
    ],
    filter: {
      from: "now-15m",
      query: "@language:(python OR go)",
      to: "now",
    },
    groupBy: [
      {
        facet: "@git.branch",
        limit: 10,
        sort: {
          order: "asc",
        },
        total: false,
      },
    ],
    options: {
      timezone: "GMT",
    },
  },
};

apiInstance
  .aggregateCIAppTestEvents(params)
  .then((data: v2.CIAppTestsAnalyticsAggregateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
