/**
 * List LLM Observability experiments returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsExperiments"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

apiInstance
  .listLLMObsExperiments()
  .then((data: v2.LLMObsExperimentsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
