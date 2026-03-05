/**
 * Delete LLM Observability datasets returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsDatasets"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsDatasetsRequest = {
  body: {
    data: {
      attributes: {
        datasetIds: ["9f64e5c7-dc5a-45c8-a17c-1b85f0bec97d"],
      },
      type: "datasets",
    },
  },
  projectId: "project_id",
};

apiInstance
  .deleteLLMObsDatasets(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
