/**
 * Add annotation queue interactions returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsAnnotationQueueInteractions"] =
  true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCreateLLMObsAnnotationQueueInteractionsRequest =
  {
    body: {
      data: {
        attributes: {
          interactions: [
            {
              contentId: "trace-abc-123",
              type: "trace",
            },
          ],
        },
        type: "interactions",
      },
    },
    queueId: "queue_id",
  };

apiInstance
  .createLLMObsAnnotationQueueInteractions(params)
  .then((data: v2.LLMObsAnnotationQueueInteractionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
