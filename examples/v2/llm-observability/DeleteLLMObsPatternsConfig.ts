/**
 * Delete a patterns configuration returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsPatternsConfig"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsPatternsConfigRequest = {
  configId: "config_id",
};

apiInstance
  .deleteLLMObsPatternsConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
