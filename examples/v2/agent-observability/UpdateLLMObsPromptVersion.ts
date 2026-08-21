/**
 * Update an Agent Observability prompt version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsPromptVersion"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiUpdateLLMObsPromptVersionRequest = {
  body: {
    data: {
      attributes: {
        envIds: [],
        labels: ["production"],
      },
      type: "prompt-template-versions",
    },
  },
  promptId: "prompt_id",
  version: 9223372036854775807,
};

apiInstance
  .updateLLMObsPromptVersion(params)
  .then((data: v2.LLMObsPromptVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
