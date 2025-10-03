/**
 * Create a pipeline returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "",
    processors: [
      {
        grok: {
          matchRules: "rule_name_1 foo\nrule_name_2 bar",
          supportRules: "rule_name_1 foo\nrule_name_2 bar",
        },
        isEnabled: false,
        samples: [],
        source: "message",
        type: "grok-parser",
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
