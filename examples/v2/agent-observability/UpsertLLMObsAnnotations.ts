/**
 * Create or update annotations returns "OK — annotations created or updated. For mixed batches, denied items and other
 * per-item errors are listed in `errors`." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.upsertLLMObsAnnotations"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiUpsertLLMObsAnnotationsRequest = {
  body: {
    data: {
      attributes: {
        annotations: [
          {
            interactionId: "00000000-0000-0000-0000-000000000001",
            labelValues: [
              {
                labelSchemaId: "abc-123",
                value: "good",
              },
              {
                labelSchemaId: "ef56gh78",
                value: "positive",
              },
            ],
          },
        ],
      },
      type: "annotations",
    },
  },
  queueId: "queue_id",
};

apiInstance
  .upsertLLMObsAnnotations(params)
  .then((data: v2.LLMObsAnnotationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
