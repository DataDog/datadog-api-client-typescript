/**
 * Get a custom evaluator configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsCustomEvalConfig"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiGetLLMObsCustomEvalConfigRequest = {
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
