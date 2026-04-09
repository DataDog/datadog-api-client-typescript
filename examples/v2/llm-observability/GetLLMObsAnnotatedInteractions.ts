/**
 * Get annotated queue interactions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsAnnotatedInteractions"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiGetLLMObsAnnotatedInteractionsRequest = {
  queueId: "queue_id",
};

apiInstance
  .getLLMObsAnnotatedInteractions(params)
  .then((data: v2.LLMObsAnnotatedInteractionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
