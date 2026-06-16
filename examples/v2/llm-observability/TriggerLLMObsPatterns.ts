/**
 * Trigger a patterns run returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.triggerLLMObsPatterns"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiTriggerLLMObsPatternsRequest = {
  body: {
    data: {
      attributes: {
        configId: "a7c8d9e0-1234-5678-9abc-def012345678",
      },
      type: "topic_discovery",
    },
  },
};

apiInstance
  .triggerLLMObsPatterns(params)
  .then((data: v2.LLMObsPatternsTriggerResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
