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
        annotationSchema: {
          labelSchemas: [
            {
              description: "Rating of the response quality.",
              hasAssessment: false,
              hasReasoning: false,
              id: "ab12cd34",
              isAssessment: false,
              isInteger: false,
              isRequired: true,
              max: 5.0,
              min: 0.0,
              name: "quality",
              type: "score",
              values: ["good", "bad", "neutral"],
            },
          ],
        },
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
