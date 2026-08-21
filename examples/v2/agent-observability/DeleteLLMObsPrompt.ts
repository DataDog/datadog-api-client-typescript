/**
 * Delete an Agent Observability prompt returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsPrompt"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiDeleteLLMObsPromptRequest = {
  promptId: "prompt_id",
};

apiInstance
  .deleteLLMObsPrompt(params)
  .then((data: v2.LLMObsDeletedPromptResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
