/**
 * Create a pipeline with Array Map Processor with preserve_source false returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineArrayMapNoPreserve",
    processors: [
      {
        type: "array-map-processor",
        isEnabled: true,
        name: "map and remove source",
        source: "items",
        target: "out",
        preserveSource: false,
        processors: [
          {
            type: "attribute-remapper",
            sources: ["$sourceElem.id"],
            target: "$targetElem.uid",
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
