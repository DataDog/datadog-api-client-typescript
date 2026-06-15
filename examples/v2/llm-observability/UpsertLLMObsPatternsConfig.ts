/**
 * Create or update a patterns configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.upsertLLMObsPatternsConfig"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiUpsertLLMObsPatternsConfigRequest = {
  body: {
    data: {
      attributes: {
        accountId: "1000000001",
        configId: "a7c8d9e0-1234-5678-9abc-def012345678",
        evpQuery: "@ml_app:support-bot",
        hierarchyDepth: 2,
        integrationProvider: "openai",
        modelName: "gpt-4o",
        name: "Support chatbot topics",
        numRecords: 1000,
        samplingRatio: 0.1,
        scope: "",
        template: "",
      },
      type: "topic_discovery_configs",
    },
  },
};

apiInstance
  .upsertLLMObsPatternsConfig(params)
  .then((data: v2.LLMObsPatternsConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
