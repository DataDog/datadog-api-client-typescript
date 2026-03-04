/**
 * Delete LLM Observability dataset records returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsDatasetRecords"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsDatasetRecordsRequest = {
  body: {
    data: {
      attributes: {
        recordIds: ["rec-7c3f5a1b-9e2d-4f8a-b1c6-3d7e9f0a2b4c"],
      },
      type: "records",
    },
  },
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .deleteLLMObsDatasetRecords(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
