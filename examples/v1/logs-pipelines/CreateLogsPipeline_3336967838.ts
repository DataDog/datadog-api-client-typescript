/**
 * Create a pipeline with Decoder Processor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "testDecoderProcessor",
    processors: [
      {
        type: "decoder-processor",
        isEnabled: true,
        name: "test_decoder",
        source: "encoded.field",
        target: "decoded.field",
        binaryToTextEncoding: "base16",
        inputRepresentation: "utf_8",
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
