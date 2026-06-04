/**
 * List LLM Observability experiment spans (v1) returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsExperimentEventsV1"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsExperimentEventsV1Request = {
  experimentId: "experiment_id",
};

apiInstance
  .listLLMObsExperimentEventsV1(params)
  .then((data: v2.LLMObsExperimentSpansResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
