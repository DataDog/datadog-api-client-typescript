/**
 * List LLM Observability dataset versions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsDatasetVersions"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsDatasetVersionsRequest = {
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .listLLMObsDatasetVersions(params)
  .then((data: v2.LLMObsDatasetVersionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
