/**
 * List patterns clustered points returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsPatternsClusteredPoints"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsPatternsClusteredPointsRequest = {
  topicId: "topic_id",
};

apiInstance
  .listLLMObsPatternsClusteredPoints(params)
  .then((data: v2.LLMObsPatternsClusteredPointsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
