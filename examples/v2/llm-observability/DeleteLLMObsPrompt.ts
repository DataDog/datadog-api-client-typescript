/**
 * Delete an LLM Observability prompt returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsPrompt"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

// there is a valid "prompt" in the system
const PROMPT_DATA_ATTRIBUTES_PROMPT_ID = process.env
  .PROMPT_DATA_ATTRIBUTES_PROMPT_ID as string;

const params: v2.LLMObservabilityApiDeleteLLMObsPromptRequest = {
  promptId: PROMPT_DATA_ATTRIBUTES_PROMPT_ID,
};

apiInstance
  .deleteLLMObsPrompt(params)
  .then((data: v2.LLMObsDeletedPromptResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
