/**
 * Get a ChatGPT Enterprise integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getChatGPTEnterpriseIntegrationAccount"] =
  true;
const apiInstance = new v2.ChatGPTEnterpriseIntegrationApi(configuration);

const params: v2.ChatGPTEnterpriseIntegrationApiGetChatGPTEnterpriseIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getChatGPTEnterpriseIntegrationAccount(params)
  .then((data: v2.ChatGPTEnterpriseIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
