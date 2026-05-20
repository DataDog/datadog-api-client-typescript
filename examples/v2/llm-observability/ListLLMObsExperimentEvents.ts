/**
 * List events for an LLM Observability experiment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsExperimentEvents"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsExperimentEventsRequest = {
  experimentId: "experiment_id",
};

apiInstance
  .listLLMObsExperimentEvents(params)
  .then((data: v2.LLMObsExperimentEventsV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
