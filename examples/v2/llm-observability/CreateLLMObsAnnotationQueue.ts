/**
 * Create an LLM Observability annotation queue returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsAnnotationQueue"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCreateLLMObsAnnotationQueueRequest = {
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
        description: "Queue for annotating customer support traces",
        name: "My annotation queue",
        projectId: "a33671aa-24fd-4dcd-9b33-a8ec7dde7751",
      },
      type: "queues",
    },
  },
};

apiInstance
  .createLLMObsAnnotationQueue(params)
  .then((data: v2.LLMObsAnnotationQueueResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
