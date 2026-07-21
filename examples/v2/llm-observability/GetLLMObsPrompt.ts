/**
 * Get an LLM Observability prompt returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsPrompt"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

// there is a valid "prompt" in the system
const PROMPT_DATA_ATTRIBUTES_PROMPT_ID = process.env
  .PROMPT_DATA_ATTRIBUTES_PROMPT_ID as string;

const params: v2.LLMObservabilityApiGetLLMObsPromptRequest = {
  promptId: PROMPT_DATA_ATTRIBUTES_PROMPT_ID,
};

apiInstance
  .getLLMObsPrompt(params)
  .then((data: v2.LLMObsPromptSDKResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
