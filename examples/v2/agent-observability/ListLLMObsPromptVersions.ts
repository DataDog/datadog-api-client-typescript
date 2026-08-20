/**
 * List versions of an Agent Observability prompt returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsPromptVersions"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiListLLMObsPromptVersionsRequest = {
  promptId: "prompt_id",
};

apiInstance
  .listLLMObsPromptVersions(params)
  .then((data: v2.LLMObsPromptVersionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
