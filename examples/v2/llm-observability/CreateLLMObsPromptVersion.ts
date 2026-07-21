/**
 * Create a new LLM Observability prompt version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsPromptVersion"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

// there is a valid "prompt" in the system
const PROMPT_DATA_ATTRIBUTES_PROMPT_ID = process.env
  .PROMPT_DATA_ATTRIBUTES_PROMPT_ID as string;

const params: v2.LLMObservabilityApiCreateLLMObsPromptVersionRequest = {
  body: {
    data: {
      attributes: {
        template: [
          {
            content:
              "You are a concise customer support assistant for {{company_name}}.",
            role: "system",
          },
          {
            content: "Answer {{customer_name}}'s question: {{question}}",
            role: "user",
          },
        ],
      },
      type: "prompt-template-versions",
    },
  },
  promptId: PROMPT_DATA_ATTRIBUTES_PROMPT_ID,
};

apiInstance
  .createLLMObsPromptVersion(params)
  .then((data: v2.LLMObsPromptVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
