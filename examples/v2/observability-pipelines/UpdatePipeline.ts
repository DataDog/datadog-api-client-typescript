/**
 * Update a pipeline returns "Updated pipeline" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

const params: v2.ObservabilityPipelinesApiUpdatePipelineRequest = {
  body: {
    data: {
      attributes: {
        config: {
          destinations: [
            {
              id: "",
              inputs: [""],
              type: "datadog_logs",
            },
          ],
          processors: [
            {
              id: "",
              include: "",
              inputs: [""],
              type: "filter",
            },
          ],
          sources: [
            {
              id: "",
              tls: {
                crtFile: "",
              },
              type: "datadog_agent",
            },
          ],
        },
        name: "Main Observability Pipeline",
      },
      id: "pipeline-1",
      type: "pipeline",
    },
  },
  pipelineId: "pipeline_id",
};

apiInstance
  .updatePipeline(params)
  .then((data: v2.Pipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
