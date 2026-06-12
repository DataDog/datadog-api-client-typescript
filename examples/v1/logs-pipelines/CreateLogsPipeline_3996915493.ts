/**
 * Create a pipeline with Array Map Processor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineArrayMap",
    processors: [
      {
        type: "array-map-processor",
        isEnabled: true,
        name: "map items",
        source: "items",
        target: "out",
        preserveSource: true,
        processors: [
          {
            type: "attribute-remapper",
            sources: ["$sourceElem.id"],
            target: "$targetElem.uid",
            preserveSource: true,
          },
          {
            type: "string-builder-processor",
            template: "item-%{$sourceElem.id}",
            target: "$targetElem.label",
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
