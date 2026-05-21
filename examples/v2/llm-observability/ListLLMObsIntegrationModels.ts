/**
 * List LLM integration models returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsIntegrationModels"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsIntegrationModelsRequest = {
  integration: "openai",
  accountId: "account_id",
};

apiInstance
  .listLLMObsIntegrationModels(params)
  .then((data: v2.LLMObsIntegrationModel[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
