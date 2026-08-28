/**
 * Get an Agent Observability prompt by environment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsPrompt"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiGetLLMObsPromptRequest = {
  promptId: "prompt_id",
  environment: "production",
};

apiInstance
  .getLLMObsPrompt(params)
  .then((data: v2.LLMObsPromptSDKResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
