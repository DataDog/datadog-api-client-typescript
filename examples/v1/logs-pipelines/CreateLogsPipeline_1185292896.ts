/**
 * Create a pipeline with Array Map Processor using category sub-processor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineArrayMapCategory",
    processors: [
      {
        type: "array-map-processor",
        isEnabled: true,
        name: "categorize items",
        source: "items",
        target: "out",
        processors: [
          {
            type: "category-processor",
            target: "$targetElem.level",
            categories: [
              {
                filter: {
                  query: "@$sourceElem.status:error",
                },
                name: "error",
              },
              {
                filter: {
                  query: "*",
                },
                name: "info",
              },
            ],
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
