/**
 * Create an LLM Observability experiment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsExperiment"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCreateLLMObsExperimentRequest = {
  body: {
    data: {
      attributes: {
        datasetId: "9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d",
        name: "My Experiment v1",
        projectId: "a33671aa-24fd-4dcd-9b33-a8ec7dde7751",
      },
      type: "experiments",
    },
  },
};

apiInstance
  .createLLMObsExperiment(params)
  .then((data: v2.LLMObsExperimentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
