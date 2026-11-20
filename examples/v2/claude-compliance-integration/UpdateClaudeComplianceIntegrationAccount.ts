/**
 * Update a Claude Compliance integration account returns "OK" response
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
  "v2.updateClaudeComplianceIntegrationAccount"
] = true;
const apiInstance = new v2.ClaudeComplianceIntegrationApi(configuration);

const params: v2.ClaudeComplianceIntegrationApiUpdateClaudeComplianceIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "bearer_token",
            token: "your-token",
          },
          name: "claude-compliance-acme",
        },
        id: "5f1a8d3c-7e2b-4f9a-b6c4-8d0e3a7f1b52",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateClaudeComplianceIntegrationAccount(params)
  .then((data: v2.ClaudeComplianceIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
