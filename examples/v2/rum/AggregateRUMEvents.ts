/**
 * Aggregate RUM events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMApi(configuration);

const params: v2.RUMApiAggregateRUMEventsRequest = {
  body: {
    compute: [
      {
        aggregation: "pc90",
        metric: "@view.time_spent",
        type: "total",
      },
    ],
    filter: {
      from: "now-15m",
      query: "@type:view AND @session.type:user",
      to: "now",
    },
    groupBy: [
      {
        facet: "@view.time_spent",
        limit: 10,
        total: false,
      },
    ],
    options: {
      timezone: "GMT",
    },
    page: {
      limit: 25,
    },
  },
};

apiInstance
  .aggregateRUMEvents(params)
  .then((data: v2.RUMAnalyticsAggregateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
