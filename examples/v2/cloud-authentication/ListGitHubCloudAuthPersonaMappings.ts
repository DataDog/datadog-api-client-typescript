/**
 * List GitHub cloud authentication persona mappings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listGitHubCloudAuthPersonaMappings"] =
  true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

apiInstance
  .listGitHubCloudAuthPersonaMappings()
  .then((data: v2.GitHubCloudAuthPersonaMappingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
