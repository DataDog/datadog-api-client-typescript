/**
 * List patterns runs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsPatternsRuns"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsPatternsRunsRequest = {
  configId: "config_id",
};

apiInstance
  .listLLMObsPatternsRuns(params)
  .then((data: v2.LLMObsPatternsRunsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
