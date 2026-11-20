/**
 * Delete a Claude Compliance integration account returns "OK" response
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
  "v2.deleteClaudeComplianceIntegrationAccount"
] = true;
const apiInstance = new v2.ClaudeComplianceIntegrationApi(configuration);

const params: v2.ClaudeComplianceIntegrationApiDeleteClaudeComplianceIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .deleteClaudeComplianceIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
