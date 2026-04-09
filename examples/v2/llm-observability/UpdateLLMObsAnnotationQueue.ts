/**
 * Update an LLM Observability annotation queue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsAnnotationQueue"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiUpdateLLMObsAnnotationQueueRequest = {
  body: {
    data: {
      attributes: {
        description: "Updated description",
        name: "Updated queue name",
      },
      type: "queues",
    },
  },
  queueId: "queue_id",
};

apiInstance
  .updateLLMObsAnnotationQueue(params)
  .then((data: v2.LLMObsAnnotationQueueResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
