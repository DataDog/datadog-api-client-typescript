/**
 * List patterns topics with clustered points returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.listLLMObsPatternsTopicsWithClusteredPoints"
] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsPatternsTopicsWithClusteredPointsRequest =
  {
    configId: "config_id",
  };

apiInstance
  .listLLMObsPatternsTopicsWithClusteredPoints(params)
  .then((data: v2.LLMObsPatternsTopicsWithClusteredPointsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
