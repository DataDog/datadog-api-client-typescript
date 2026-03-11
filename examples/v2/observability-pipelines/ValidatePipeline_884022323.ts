/**
 * Validate a metrics pipeline with opentelemetry source returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

const params: v2.ObservabilityPipelinesApiValidatePipelineRequest = {
  body: {
    data: {
      attributes: {
        config: {
          pipelineType: "metrics",
          destinations: [
            {
              id: "datadog-metrics-destination",
              inputs: ["my-processor-group"],
              type: "datadog_metrics",
            },
          ],
          processorGroups: [
            {
              enabled: true,
              id: "my-processor-group",
              include: "*",
              inputs: ["opentelemetry-source"],
              processors: [
                {
                  enabled: true,
                  id: "filter-processor",
                  include: "env:production",
                  type: "filter",
                },
              ],
            },
          ],
          sources: [
            {
              id: "opentelemetry-source",
              type: "opentelemetry",
            },
          ],
        },
        name: "Metrics OTel Pipeline",
      },
      type: "pipelines",
    },
  },
};

apiInstance
  .validatePipeline(params)
  .then((data: v2.ValidationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
