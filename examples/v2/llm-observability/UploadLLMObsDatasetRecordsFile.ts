/**
 * Upload records to an LLM Observability dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.uploadLLMObsDatasetRecordsFile"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiUploadLLMObsDatasetRecordsFileRequest = {
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .uploadLLMObsDatasetRecordsFile(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
