/**
 * Delete LLM Observability data returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteLLMObsData"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiDeleteLLMObsDataRequest = {
  body: {
    data: {
      attributes: {
        delay: 0,
        from: 1705314600000,
        query: {
          query: "@trace_id:abc123def456",
        },
        to: 1705315200000,
      },
      type: "create_deletion_req",
    },
  },
};

apiInstance
  .deleteLLMObsData(params)
  .then((data: v2.LLMObsDataDeletionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
