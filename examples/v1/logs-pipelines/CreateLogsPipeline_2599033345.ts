/**
 * Create a pipeline with nested pipeline processor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineWithNested",
    processors: [
      {
        type: "pipeline",
        isEnabled: true,
        name: "nested_pipeline_with_metadata",
        filter: {
          query: "env:production",
        },
        tags: ["env:prod", "type:nested"],
        description: "This is a nested pipeline for production logs",
      },
    ],
    tags: ["team:test"],
    description:
      "Pipeline containing nested processor with tags and description",
  },
};

apiInstance
  .createLogsPipeline(params)
  .then((data: v1.LogsPipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
