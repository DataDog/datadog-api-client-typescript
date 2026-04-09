/**
 * Delete annotation queue interactions returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsAnnotationQueueInteractions"] =
  true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsAnnotationQueueInteractionsRequest =
  {
    body: {
      data: {
        attributes: {
          interactionIds: [
            "00000000-0000-0000-0000-000000000000",
            "00000000-0000-0000-0000-000000000001",
          ],
        },
        type: "interactions",
      },
    },
    queueId: "queue_id",
  };

apiInstance
  .deleteLLMObsAnnotationQueueInteractions(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
