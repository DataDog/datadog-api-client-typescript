/**
 * Create a Claude Compliance integration account returns "Created" response
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
  "v2.createClaudeComplianceIntegrationAccount"
] = true;
const apiInstance = new v2.ClaudeComplianceIntegrationApi(configuration);

const params: v2.ClaudeComplianceIntegrationApiCreateClaudeComplianceIntegrationAccountRequest =
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
        type: "integration-account",
      },
    },
  };

apiInstance
  .createClaudeComplianceIntegrationAccount(params)
  .then((data: v2.ClaudeComplianceIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
