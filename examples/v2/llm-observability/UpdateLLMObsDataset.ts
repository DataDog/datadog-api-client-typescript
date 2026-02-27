/**
 * Update an LLM Observability dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsDataset"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiUpdateLLMObsDatasetRequest = {
  body: {
    data: {
      attributes: {},
      type: "datasets",
    },
  },
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .updateLLMObsDataset(params)
  .then((data: v2.LLMObsDatasetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
