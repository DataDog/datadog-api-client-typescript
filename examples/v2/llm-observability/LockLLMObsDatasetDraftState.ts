/**
 * Lock LLM Observability dataset draft state returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.lockLLMObsDatasetDraftState"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiLockLLMObsDatasetDraftStateRequest = {
  projectId: "project_id",
  datasetId: "dataset_id",
};

apiInstance
  .lockLLMObsDatasetDraftState(params)
  .then((data: v2.LLMObsDatasetDraftStateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
