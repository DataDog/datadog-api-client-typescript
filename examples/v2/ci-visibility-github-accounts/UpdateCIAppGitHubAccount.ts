/**
 * Update GitHub CI Visibility status returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityGitHubAccountsApi(configuration);

const params: v2.CIVisibilityGitHubAccountsApiUpdateCIAppGitHubAccountRequest =
  {
    body: {
      data: {
        attributes: {
          account: "datadog",
          enabled: true,
          host: "github.com",
          repository: {
            enabled: true,
            name: "shopist",
          },
        },
        type: "ci_github_account",
      },
    },
  };

apiInstance
  .updateCIAppGitHubAccount(params)
  .then((data: v2.CIAppGitHubAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
