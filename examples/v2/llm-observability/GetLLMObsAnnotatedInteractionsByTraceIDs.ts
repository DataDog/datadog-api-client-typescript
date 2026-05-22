/**
 * Get annotated interactions by content IDs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.getLLMObsAnnotatedInteractionsByTraceIDs"
] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiGetLLMObsAnnotatedInteractionsByTraceIDsRequest =
  {
    contentIds: [],
  };

apiInstance
  .getLLMObsAnnotatedInteractionsByTraceIDs(params)
  .then((data: v2.LLMObsAnnotatedInteractionsByTraceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
