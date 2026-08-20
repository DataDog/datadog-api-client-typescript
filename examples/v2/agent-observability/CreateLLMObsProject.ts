/**
 * Create an Agent Observability project returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLLMObsProject"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiCreateLLMObsProjectRequest = {
  body: {
    data: {
      attributes: {
        name: "My LLM Project",
      },
      type: "projects",
    },
  },
};

apiInstance
  .createLLMObsProject(params)
  .then((data: v2.LLMObsProjectResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
