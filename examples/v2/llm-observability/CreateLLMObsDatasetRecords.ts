/**
 * Append records to an LLM Observability dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsDatasetRecords"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCreateLLMObsDatasetRecordsRequest = {
  body: {
    data: {
      attributes: {
        records: [
          {
            expectedOutput: undefined,
            input: null,
          },
        ],
      },
      type: "records",
    },
  },
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .createLLMObsDatasetRecords(params)
  .then((data: v2.LLMObsDatasetRecordsMutationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
