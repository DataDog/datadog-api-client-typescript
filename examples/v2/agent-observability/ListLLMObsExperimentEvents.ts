/**
 * List events for an Agent Observability experiment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listLLMObsExperimentEvents"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiListLLMObsExperimentEventsRequest = {
  experimentId: "experiment_id",
};

apiInstance
  .listLLMObsExperimentEvents(params)
  .then((data: v2.LLMObsExperimentEventsV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
