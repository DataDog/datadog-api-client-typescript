/**
 * Get a specific Agent Observability prompt version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsPromptVersion"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiGetLLMObsPromptVersionRequest = {
  promptId: "prompt_id",
  version: 9223372036854775807,
};

apiInstance
  .getLLMObsPromptVersion(params)
  .then((data: v2.LLMObsPromptVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
