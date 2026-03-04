/**
 * List LLM Observability dataset records returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsDatasetRecords"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsDatasetRecordsRequest = {
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .listLLMObsDatasetRecords(params)
  .then((data: v2.LLMObsDatasetRecordsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
