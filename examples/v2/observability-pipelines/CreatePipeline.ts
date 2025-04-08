/**
 * Create a new pipeline returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createPipeline"] = true;
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

const params: v2.ObservabilityPipelinesApiCreatePipelineRequest = {
  body: {
    data: {
      attributes: {
        config: {
          destinations: [
            {
              id: "datadog-logs-destination",
              inputs: ["filter-processor"],
              type: "datadog_logs",
            },
          ],
          processors: [
            {
              id: "filter-processor",
              include: "service:my-service",
              inputs: ["datadog-agent-source"],
              type: "filter",
            },
          ],
          sources: [
            {
              id: "datadog-agent-source",
              type: "datadog_agent",
            },
          ],
        },
        name: "Main Observability Pipeline",
      },
      type: "pipelines",
    },
  },
};

apiInstance
  .createPipeline(params)
  .then((data: v2.ObservabilityPipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
