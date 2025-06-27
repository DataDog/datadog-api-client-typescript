/**
 * Create a pipeline with Array Processor Select Operation returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineArraySelect",
    processors: [
      {
        type: "array-processor",
        isEnabled: true,
        name: "extract_referrer",
        operation: {
          type: "select",
          source: "httpRequest.headers",
          target: "referrer",
          filter: "name:Referrer",
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
