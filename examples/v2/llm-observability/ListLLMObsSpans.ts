/**
 * List LLM Observability spans returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsSpans"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

apiInstance
  .listLLMObsSpans()
  .then((data: v2.LLMObsSpansResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
