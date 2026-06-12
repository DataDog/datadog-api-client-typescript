/**
 * Create a pipeline with Array Map Processor using arithmetic sub-processor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineArrayMapArithmetic",
    processors: [
      {
        type: "array-map-processor",
        isEnabled: true,
        name: "double counts",
        source: "items",
        target: "out",
        processors: [
          {
            type: "arithmetic-processor",
            expression: "$sourceElem.count * 2",
            target: "$targetElem.doubled",
          },
        ],
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
