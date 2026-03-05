/**
 * Update an LLM Observability experiment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsExperiment"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiUpdateLLMObsExperimentRequest = {
  body: {
    data: {
      attributes: {},
      type: "experiments",
    },
  },
  experimentId: "experiment_id",
};

apiInstance
  .updateLLMObsExperiment(params)
  .then((data: v2.LLMObsExperimentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
