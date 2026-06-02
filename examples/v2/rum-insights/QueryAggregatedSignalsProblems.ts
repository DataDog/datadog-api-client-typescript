/**
 * Query aggregated signals and problems returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryAggregatedSignalsProblems"] = true;
const apiInstance = new v2.RUMInsightsApi(configuration);

const params: v2.RUMInsightsApiQueryAggregatedSignalsProblemsRequest = {
  body: {
    data: {
      attributes: {
        applicationId: "ccbc53b1-74f2-496b-bdd7-9a8fa7b7376b",
        criteria: {
          max: 5.0,
          metric: "largest_contentful_paint",
          min: 2.5,
        },
        detectionTypes: ["high_script_evaluations", "uncompressed_resources"],
        filter: "@session.type:user",
        from: 1762437564,
        sampleSize: 30,
        to: 1762523964,
        viewName: "/account/login(/:type)",
      },
      type: "aggregated_signals_problems",
    },
  },
};

apiInstance
  .queryAggregatedSignalsProblems(params)
  .then((data: v2.AggregatedSignalsProblemsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
