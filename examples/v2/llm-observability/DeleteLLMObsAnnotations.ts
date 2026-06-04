/**
 * Delete annotations returns "OK — annotations deleted. Errors for annotations that could not be deleted are listed in
 * `errors`." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsAnnotations"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsAnnotationsRequest = {
  body: {
    data: {
      attributes: {
        annotationIds: [
          "00000000-0000-0000-0000-000000000000",
          "00000000-0000-0000-0000-000000000001",
        ],
      },
      type: "annotations",
    },
  },
  queueId: "queue_id",
};

apiInstance
  .deleteLLMObsAnnotations(params)
  .then((data: v2.LLMObsDeleteAnnotationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
