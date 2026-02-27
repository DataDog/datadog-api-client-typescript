/**
 * Push events for an LLM Observability experiment returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsExperimentEvents"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCreateLLMObsExperimentEventsRequest = {
  body: {
    data: {
      attributes: {
        metrics: [
          {
            assessment: "pass",
            error: {},
            label: "faithfulness",
            metricType: "score",
            spanId: "span-7a1b2c3d",
            tags: [],
            timestampMs: 1705314600000,
          },
        ],
        spans: [
          {
            datasetId: "9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d",
            duration: 1500000000,
            meta: {
              error: {},
            },
            name: "llm_call",
            projectId: "a33671aa-24fd-4dcd-9b33-a8ec7dde7751",
            spanId: "span-7a1b2c3d",
            startNs: 1705314600000000000,
            status: "ok",
            tags: [],
            traceId: "abc123def456",
          },
        ],
      },
      type: "events",
    },
  },
  experimentId: "experiment_id",
};

apiInstance
  .createLLMObsExperimentEvents(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
