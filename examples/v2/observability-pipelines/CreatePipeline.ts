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
          destinations: [],
          processors: [],
          sources: [],
        },
        name: "",
      },
      id: "e8890e15-053e-4d34-9404-1b41b9e403e2",
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
