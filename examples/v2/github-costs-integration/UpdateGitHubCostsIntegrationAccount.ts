/**
 * Update a GitHub Costs integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateGitHubCostsIntegrationAccount"] =
  true;
const apiInstance = new v2.GitHubCostsIntegrationApi(configuration);

const params: v2.GitHubCostsIntegrationApiUpdateGitHubCostsIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "bearer_token",
            token: "your-token",
          },
          name: "github-costs-acme",
          settings: {
            enterpriseName: "enterprise-name",
            tags: "env:prod,team:example",
          },
        },
        id: "5f1a8d3c-7e2b-4f9a-b6c4-8d0e3a7f1b52",
        type: "integration-account",
      },
    },
    accountId: "account_id",
  };

apiInstance
  .updateGitHubCostsIntegrationAccount(params)
  .then((data: v2.GitHubCostsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
