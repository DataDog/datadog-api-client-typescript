/**
 * Update a specific LLM Observability prompt version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsPromptVersion"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

// there is a valid "prompt" in the system
const PROMPT_DATA_ATTRIBUTES_PROMPT_ID = process.env
  .PROMPT_DATA_ATTRIBUTES_PROMPT_ID as string;

// there is a valid "prompt_version" in the system
const PROMPT_VERSION_DATA_ATTRIBUTES_VERSION = parseInt(
  process.env.PROMPT_VERSION_DATA_ATTRIBUTES_VERSION as string
);

const params: v2.LLMObservabilityApiUpdateLLMObsPromptVersionRequest = {
  body: {
    data: {
      attributes: {
        description:
          "Give concise answers and cite relevant help-center articles.",
      },
      type: "prompt-template-versions",
    },
  },
  promptId: PROMPT_DATA_ATTRIBUTES_PROMPT_ID,
  version: PROMPT_VERSION_DATA_ATTRIBUTES_VERSION,
};

apiInstance
  .updateLLMObsPromptVersion(params)
  .then((data: v2.LLMObsPromptVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
