/**
 * List custom evaluator configurations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsCustomEvalConfigs"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

apiInstance
  .listLLMObsCustomEvalConfigs()
  .then((data: v2.LLMObsCustomEvalConfigListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
