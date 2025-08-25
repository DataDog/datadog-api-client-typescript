/**
 * Aggregate pipelines events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityPipelinesApi(configuration);

const params: v2.CIVisibilityPipelinesApiAggregateCIAppPipelineEventsRequest = {
  body: {
    compute: [
      {
        aggregation: "pc90",
        metric: "@duration",
        type: "total",
      },
    ],
    filter: {
      from: "now-15m",
      query: "@ci.provider.name:(gitlab OR github)",
      to: "now",
    },
    groupBy: [
      {
        facet: "@ci.status",
        limit: 10,
        total: false,
      },
    ],
    options: {
      timezone: "GMT",
    },
  },
};

apiInstance
  .aggregateCIAppPipelineEvents(params)
  .then((data: v2.CIAppPipelinesAnalyticsAggregateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
