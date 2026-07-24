/**
 * Create a pipeline with Array Processor Key Value Operation returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineArrayKeyValue",
    processors: [
      {
        type: "array-processor",
        isEnabled: true,
        name: "extract_kv",
        operation: {
          type: "key-value",
          source: "tags",
          keyToExtract: "name",
          valueToExtract: "value",
        },
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
