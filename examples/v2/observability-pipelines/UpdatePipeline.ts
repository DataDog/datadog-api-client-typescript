/**
 * Update a pipeline returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updatePipeline"] = true;
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

// there is a valid "pipeline" in the system
const PIPELINE_DATA_ID = process.env.PIPELINE_DATA_ID as string;

const params: v2.ObservabilityPipelinesApiUpdatePipelineRequest = {
  body: {
    data: {
      attributes: {
        config: {
          destinations: [
            {
              id: "updated-datadog-logs-destination-id",
              inputs: ["my-processor-group"],
              type: "datadog_logs",
            },
          ],
          processorGroups: [
            {
              enabled: true,
              id: "my-processor-group",
              include: "service:my-service",
              inputs: ["datadog-agent-source"],
              processors: [
                {
                  enabled: true,
                  id: "filter-processor",
                  include: "status:error",
                  type: "filter",
                },
              ],
            },
          ],
          sources: [
            {
              id: "datadog-agent-source",
              type: "datadog_agent",
            },
          ],
        },
        name: "Updated Pipeline Name",
      },
      id: PIPELINE_DATA_ID,
      type: "pipelines",
    },
  },
  pipelineId: PIPELINE_DATA_ID,
};

apiInstance
  .updatePipeline(params)
  .then((data: v2.ObservabilityPipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
