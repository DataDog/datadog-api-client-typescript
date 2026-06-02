/**
 * Query aggregated long tasks returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryAggregatedLongTasks"] = true;
const apiInstance = new v2.RUMInsightsApi(configuration);

const params: v2.RUMInsightsApiQueryAggregatedLongTasksRequest = {
  body: {
    data: {
      attributes: {
        applicationId: "ccbc53b1-74f2-496b-bdd7-9a8fa7b7376b",
        criteria: {
          max: 5.0,
          metric: "largest_contentful_paint",
          min: 2.5,
        },
        filter: "@session.type:user",
        from: 1762437564,
        sampleSize: 20,
        to: 1762523964,
        viewName: "/account/login(/:type)",
      },
      type: "aggregated_long_tasks",
    },
  },
};

apiInstance
  .queryAggregatedLongTasks(params)
  .then((data: v2.AggregatedLongTasksResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
