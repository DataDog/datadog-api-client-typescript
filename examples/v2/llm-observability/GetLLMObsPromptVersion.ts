/**
 * Get a specific LLM Observability prompt version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsPromptVersion"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

// there is a valid "prompt" in the system
const PROMPT_DATA_ATTRIBUTES_PROMPT_ID = process.env
  .PROMPT_DATA_ATTRIBUTES_PROMPT_ID as string;

// there is a valid "prompt_version" in the system
const PROMPT_VERSION_DATA_ATTRIBUTES_VERSION = parseInt(
  process.env.PROMPT_VERSION_DATA_ATTRIBUTES_VERSION as string
);

const params: v2.LLMObservabilityApiGetLLMObsPromptVersionRequest = {
  promptId: PROMPT_DATA_ATTRIBUTES_PROMPT_ID,
  version: PROMPT_VERSION_DATA_ATTRIBUTES_VERSION,
};

apiInstance
  .getLLMObsPromptVersion(params)
  .then((data: v2.LLMObsPromptVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
