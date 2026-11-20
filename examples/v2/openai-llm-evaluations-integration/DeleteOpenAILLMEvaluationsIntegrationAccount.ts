/**
 * Delete an OpenAI LLM Evaluations account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations[
  "v2.deleteOpenAILLMEvaluationsIntegrationAccount"
] = true;
const apiInstance = new v2.OpenAILLMEvaluationsIntegrationApi(configuration);

const params: v2.OpenAILLMEvaluationsIntegrationApiDeleteOpenAILLMEvaluationsIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .deleteOpenAILLMEvaluationsIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
