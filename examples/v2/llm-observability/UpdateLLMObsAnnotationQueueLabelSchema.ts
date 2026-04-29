/**
 * Update annotation queue label schema returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsAnnotationQueueLabelSchema"] =
  true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiUpdateLLMObsAnnotationQueueLabelSchemaRequest =
  {
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
        },
        type: "queues",
      },
    },
    queueId: "queue_id",
  };

apiInstance
  .updateLLMObsAnnotationQueueLabelSchema(params)
  .then((data: v2.LLMObsAnnotationQueueLabelSchemaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
