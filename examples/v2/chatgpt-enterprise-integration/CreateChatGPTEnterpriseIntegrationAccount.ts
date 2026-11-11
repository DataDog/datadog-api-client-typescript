/**
 * Create a ChatGPT Enterprise integration account returns "Created" response
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
  "v2.createChatGPTEnterpriseIntegrationAccount"
] = true;
const apiInstance = new v2.ChatGPTEnterpriseIntegrationApi(configuration);

const params: v2.ChatGPTEnterpriseIntegrationApiCreateChatGPTEnterpriseIntegrationAccountRequest =
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
        type: "integration-account",
      },
    },
  };

apiInstance
  .createChatGPTEnterpriseIntegrationAccount(params)
  .then((data: v2.ChatGPTEnterpriseIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
