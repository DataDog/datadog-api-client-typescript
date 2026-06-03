/**
 * List LLM Observability experiment events (v2) returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsExperimentEventsV2"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsExperimentEventsV2Request = {
  experimentId: "experiment_id",
};

apiInstance
  .listLLMObsExperimentEventsV2(params)
  .then((data: v2.LLMObsExperimentEventsV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
