/**
 * Create a pipeline with Array Processor Append Operation with preserve_source false returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testPipelineArrayAppendNoPreserve",
    processors: [
      {
        type: "array-processor",
        isEnabled: true,
        name: "append_ip_and_remove_source",
        operation: {
          type: "append",
          source: "network.client.ip",
          target: "sourceIps",
          preserveSource: false,
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
