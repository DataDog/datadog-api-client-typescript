/**
 * Delete LLM Observability projects returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsProjects"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsProjectsRequest = {
  body: {
    data: {
      attributes: {
        projectIds: ["a33671aa-24fd-4dcd-9b33-a8ec7dde7751"],
      },
      type: "projects",
    },
  },
};

apiInstance
  .deleteLLMObsProjects(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
