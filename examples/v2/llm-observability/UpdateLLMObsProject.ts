/**
 * Update an LLM Observability project returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLLMObsProject"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiUpdateLLMObsProjectRequest = {
  body: {
    data: {
      attributes: {},
      type: "projects",
    },
  },
  projectId: "project_id",
};

apiInstance
  .updateLLMObsProject(params)
  .then((data: v2.LLMObsProjectResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
