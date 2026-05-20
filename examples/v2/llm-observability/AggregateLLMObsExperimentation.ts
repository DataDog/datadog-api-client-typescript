/**
 * Aggregate LLM Observability experimentation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.aggregateLLMObsExperimentation"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiAggregateLLMObsExperimentationRequest = {
  body: {
    data: {
      attributes: {
        aggregate: {
          compute: [
            {
              metric: "score_value",
              name: "avg_faithfulness",
            },
          ],
          datasetVersion: undefined,
          groupBy: [
            {
              field: "span_id",
            },
          ],
          indexes: ["experiment-evals"],
          limit: 1000,
          search: {
            query: "@experiment_id:3fd6b5e0-8910-4b1c-a7d0-5b84de329012",
          },
          time: {
            from: 1705312200000,
            to: 1705315800000,
          },
        },
      },
      type: "experimentation",
    },
  },
};

apiInstance
  .aggregateLLMObsExperimentation(params)
  .then((data: v2.LLMObsExperimentationAnalyticsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
