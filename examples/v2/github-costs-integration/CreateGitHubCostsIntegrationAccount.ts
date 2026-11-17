/**
 * Create a GitHub Costs integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createGitHubCostsIntegrationAccount"] =
  true;
const apiInstance = new v2.GitHubCostsIntegrationApi(configuration);

const params: v2.GitHubCostsIntegrationApiCreateGitHubCostsIntegrationAccountRequest =
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
        type: "integration-account",
      },
    },
  };

apiInstance
  .createGitHubCostsIntegrationAccount(params)
  .then((data: v2.GitHubCostsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
