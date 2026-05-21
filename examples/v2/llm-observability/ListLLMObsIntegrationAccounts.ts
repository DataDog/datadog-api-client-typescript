/**
 * List LLM integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsIntegrationAccounts"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiListLLMObsIntegrationAccountsRequest = {
  integration: "openai",
};

apiInstance
  .listLLMObsIntegrationAccounts(params)
  .then((data: v2.LLMObsIntegrationAccount[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
