/**
 * Create a pipeline with Array Processor Append Operation returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineArrayAppend",
    processors: [
      {
        type: "array-processor",
        isEnabled: true,
        name: "append_ip_to_array",
        operation: {
          type: "append",
          source: "network.client.ip",
          target: "sourceIps",
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
