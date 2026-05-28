/**
 * Batch update LLM Observability dataset records returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.batchUpdateLLMObsDataset"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiBatchUpdateLLMObsDatasetRequest = {
  body: {
    data: {
      attributes: {
        createNewVersion: true,
        deleteRecords: [],
        insertRecords: [
          {
            expectedOutput: undefined,
            id: "rec-7c3f5a1b-9e2d-4f8a-b1c6-3d7e9f0a2b4c",
            input: null,
            tagOperations: {
              add: [],
              remove: [],
              set: [],
            },
            tags: [],
          },
        ],
        tags: [],
        updateRecords: [
          {
            expectedOutput: undefined,
            id: "rec-7c3f5a1b-9e2d-4f8a-b1c6-3d7e9f0a2b4c",
            input: undefined,
            tagOperations: {
              add: [],
              remove: [],
              set: [],
            },
          },
        ],
      },
      id: "9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d",
      type: "datasets",
    },
  },
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .batchUpdateLLMObsDataset(params)
  .then((data: v2.LLMObsDatasetRecordsMutationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
