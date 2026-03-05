/**
 * Delete LLM Observability experiments returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsExperiments"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsExperimentsRequest = {
  body: {
    data: {
      attributes: {
        experimentIds: ["3fd6b5e0-8910-4b1c-a7d0-5b84de329012"],
      },
      type: "experiments",
    },
  },
};

apiInstance
  .deleteLLMObsExperiments(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
