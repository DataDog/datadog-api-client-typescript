/**
 * Update an Agent Observability prompt returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateLLMObsPrompt"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiUpdateLLMObsPromptRequest = {
  body: {
    data: {
      attributes: {},
      type: "prompt-templates",
    },
  },
  promptId: "prompt_id",
};

apiInstance
  .updateLLMObsPrompt(params)
  .then((data: v2.LLMObsPromptResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
