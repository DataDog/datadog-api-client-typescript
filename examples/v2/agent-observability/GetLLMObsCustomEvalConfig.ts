/**
 * Get a custom evaluator configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getLLMObsCustomEvalConfig"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

const params: v2.AgentObservabilityApiGetLLMObsCustomEvalConfigRequest = {
  evalName: "eval_name",
};

apiInstance
  .getLLMObsCustomEvalConfig(params)
  .then((data: v2.LLMObsCustomEvalConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
