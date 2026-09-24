/**
 * Get annotation queue label schema returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getLLMObsAnnotationQueueLabelSchema"] =
  true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiGetLLMObsAnnotationQueueLabelSchemaRequest =
  {
    queueId: "queue_id",
  };

apiInstance
  .getLLMObsAnnotationQueueLabelSchema(params)
  .then((data: v2.LLMObsAnnotationQueueLabelSchemaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
