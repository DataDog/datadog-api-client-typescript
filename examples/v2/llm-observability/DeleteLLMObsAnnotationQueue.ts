/**
 * Delete an LLM Observability annotation queue returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsAnnotationQueue"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsAnnotationQueueRequest = {
  queueId: "queue_id",
};

apiInstance
  .deleteLLMObsAnnotationQueue(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
