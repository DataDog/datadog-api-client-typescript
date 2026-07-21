/**
 * Create an LLM Observability prompt returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsPrompt"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCreateLLMObsPromptRequest = {
  body: {
    data: {
      attributes: {
        promptId: "Example-LLM-Observability",
        title: "Customer Support Assistant",
        template: [
          {
            content:
              "You are a helpful customer support assistant for {{company_name}}.",
            role: "system",
          },
          {
            content: "Help {{customer_name}} with this question: {{question}}",
            role: "user",
          },
        ],
      },
      type: "prompt-templates",
    },
  },
};

apiInstance
  .createLLMObsPrompt(params)
  .then((data: v2.LLMObsPromptResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
