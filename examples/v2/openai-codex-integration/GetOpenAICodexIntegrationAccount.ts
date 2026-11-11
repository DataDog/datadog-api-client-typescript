/**
 * Get an OpenAI Codex integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getOpenAICodexIntegrationAccount"] = true;
const apiInstance = new v2.OpenAICodexIntegrationApi(configuration);

const params: v2.OpenAICodexIntegrationApiGetOpenAICodexIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getOpenAICodexIntegrationAccount(params)
  .then((data: v2.OpenAICodexIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
