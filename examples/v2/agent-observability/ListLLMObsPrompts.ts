/**
 * List Agent Observability prompts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsPrompts"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

apiInstance
  .listLLMObsPrompts()
  .then((data: v2.LLMObsPromptsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
