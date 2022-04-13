/**
 * Update a pipeline returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiUpdateLogsPipelineRequest = {
  body: {
    filter: {
      query: "source:python",
    },
    name: "",
    processors: [
      {
        grok: {
          matchRules: `rule_name_1 foo
rule_name_2 bar
`,
          supportRules: `rule_name_1 foo
rule_name_2 bar
`,
        },
        isEnabled: false,
        samples: [],
        source: "message",
        type: "grok-parser",
      },
    ],
  },
  pipelineId: "pipeline_id",
};

apiInstance
  .updateLogsPipeline(params)
  .then((data: v1.LogsPipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
