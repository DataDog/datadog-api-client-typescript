/**
 * Get patterns run status returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsPatternsRunStatus"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiGetLLMObsPatternsRunStatusRequest = {
  configId: "config_id",
};

apiInstance
  .getLLMObsPatternsRunStatus(params)
  .then((data: v2.LLMObsPatternsRunStatusResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
