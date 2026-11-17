/**
 * Update a ChatGPT Enterprise integration account returns "OK" response
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
  "v2.updateChatGPTEnterpriseIntegrationAccount"
] = true;
const apiInstance = new v2.ChatGPTEnterpriseIntegrationApi(configuration);

const params: v2.ChatGPTEnterpriseIntegrationApiUpdateChatGPTEnterpriseIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "bearer_token",
            token: "your-token",
          },
          dataflows: {
            chatgptEnterpriseAgentConsole: {
              enabled: true,
            },
            chatgptEnterpriseCloudCostData: {
              enabled: true,
            },
          },
          name: "chatgpt-enterprise-acme",
          settings: {
            openaiOrgId: "org-AbC123dEf456",
          },
        },
        id: "3e8a1f6b-9c2d-4b7e-8a5f-6d1c4e9b2a03",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateChatGPTEnterpriseIntegrationAccount(params)
  .then((data: v2.ChatGPTEnterpriseIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
