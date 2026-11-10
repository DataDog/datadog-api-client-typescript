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
            enterpriseName: "acme",
            tags: "env:prod,team:finops",
          },
        },
        id: "4b7c2e1a-6f3d-4e8b-9a52-1d0c8f7e3b64",
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
