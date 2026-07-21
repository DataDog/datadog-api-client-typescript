/**
 * Update an LLM Observability prompt returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsPrompt"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

// there is a valid "prompt" in the system
const PROMPT_DATA_ATTRIBUTES_PROMPT_ID = process.env
  .PROMPT_DATA_ATTRIBUTES_PROMPT_ID as string;

const params: v2.LLMObservabilityApiUpdateLLMObsPromptRequest = {
  body: {
    data: {
      attributes: {
        title: "Customer Support Assistant",
      },
      type: "prompt-templates",
    },
  },
  promptId: PROMPT_DATA_ATTRIBUTES_PROMPT_ID,
};

apiInstance
  .updateLLMObsPrompt(params)
  .then((data: v2.LLMObsPromptResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
