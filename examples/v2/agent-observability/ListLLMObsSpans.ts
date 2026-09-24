/**
 * List Agent Observability spans returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listLLMObsSpans"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

apiInstance
  .listLLMObsSpans()
  .then((data: v2.LLMObsSpansResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
