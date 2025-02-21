/**
 * Create a pipeline with Span Id Remapper returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipeline",
    processors: [
      {
        type: "span-id-remapper",
        isEnabled: true,
        name: "test_filter",
        sources: ["dd.span_id"],
      },
    ],
    tags: [],
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
