/**
 * Delete an OpenAI Codex integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteOpenAICodexIntegrationAccount"] =
  true;
const apiInstance = new v2.OpenAICodexIntegrationApi(configuration);

const params: v2.OpenAICodexIntegrationApiDeleteOpenAICodexIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .deleteOpenAICodexIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
