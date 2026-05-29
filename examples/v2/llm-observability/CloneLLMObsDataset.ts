/**
 * Clone an LLM Observability dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.cloneLLMObsDataset"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCloneLLMObsDatasetRequest = {
  body: {
    data: {
      attributes: {
        description: "Clone of the original dataset for experimentation.",
        name: "My cloned dataset",
      },
      id: "9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d",
      type: "datasets",
    },
  },
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .cloneLLMObsDataset(params)
  .then((data: v2.LLMObsDatasetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
