/**
 * Create an Agent Observability prompt returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsPrompt"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiCreateLLMObsPromptRequest = {
  body: {
    data: {
      attributes: {
        config: {
          model: "provider-model",
          response_format: "{'type': 'json_object'}",
          temperature: "0.2",
        },
        envIds: [],
        labels: ["production"],
        promptId: "customer-support-assistant",
        template: "You are a helpful assistant for .",
      },
      type: "prompt-templates",
    },
  },
};

apiInstance
  .createLLMObsPrompt(params)
  .then((data: v2.LLMObsCreatePromptResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
