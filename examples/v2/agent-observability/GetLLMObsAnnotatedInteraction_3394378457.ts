/**
 * Get an annotated queue interaction returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsAnnotatedInteraction"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiGetLLMObsAnnotatedInteractionRequest = {
  queueId: "queue_id",
  interactionId: "interaction_id",
};

(async () => {
  try {
    for await (const item of apiInstance.getLLMObsAnnotatedInteractionWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
