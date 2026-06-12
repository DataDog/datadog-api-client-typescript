/**
 * List patterns topics returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsPatternsTopics"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsPatternsTopicsRequest = {
  configId: "config_id",
};

apiInstance
  .listLLMObsPatternsTopics(params)
  .then((data: v2.LLMObsPatternsTopicsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
