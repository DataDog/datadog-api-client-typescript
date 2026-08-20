/**
 * Create a new Agent Observability prompt version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsPromptVersion"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiCreateLLMObsPromptVersionRequest = {
  body: {
    data: {
      attributes: {
        envIds: [],
        labels: ["production"],
        template: "You are a helpful assistant for .",
      },
      type: "prompt-template-versions",
    },
  },
  promptId: "prompt_id",
};

apiInstance
  .createLLMObsPromptVersion(params)
  .then((data: v2.LLMObsPromptVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
