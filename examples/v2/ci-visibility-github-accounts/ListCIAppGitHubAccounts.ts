/**
 * List GitHub CI Visibility status returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.CIVisibilityGitHubAccountsApi(configuration);

apiInstance
  .listCIAppGitHubAccounts()
  .then((data: v2.CIAppGitHubAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
