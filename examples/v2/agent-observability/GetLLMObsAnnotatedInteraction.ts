/**
 * Get an annotated queue interaction returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsAnnotatedInteraction"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiGetLLMObsAnnotatedInteractionRequest = {
  queueId: "queue_id",
  interactionId: "interaction_id",
};

apiInstance
  .getLLMObsAnnotatedInteraction(params)
  .then((data: v2.LLMObsAnnotatedInteractionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
