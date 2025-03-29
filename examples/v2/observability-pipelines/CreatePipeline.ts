/**
 * Create a new pipeline returns "Pipeline created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

const params: v2.ObservabilityPipelinesApiCreatePipelineRequest = {
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
};

apiInstance
  .createPipeline(params)
  .then((data: v2.Pipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
