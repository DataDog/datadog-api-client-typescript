/**
 * List ChatGPT Enterprise integration accounts returns "OK" response
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
  "v2.listChatGPTEnterpriseIntegrationAccounts"
] = true;
const apiInstance = new v2.ChatGPTEnterpriseIntegrationApi(configuration);

apiInstance
  .listChatGPTEnterpriseIntegrationAccounts()
  .then((data: v2.ChatGPTEnterpriseIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
