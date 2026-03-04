/**
 * Create an LLM Observability dataset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsDataset"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiCreateLLMObsDatasetRequest = {
  body: {
    data: {
      attributes: {
        name: "My LLM Dataset",
      },
      type: "datasets",
    },
  },
  projectId: "project_id",
};

apiInstance
  .createLLMObsDataset(params)
  .then((data: v2.LLMObsDatasetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
