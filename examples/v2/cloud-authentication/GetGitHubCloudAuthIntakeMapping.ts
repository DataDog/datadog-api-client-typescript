/**
 * Get a GitHub cloud authentication intake mapping returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getGitHubCloudAuthIntakeMapping"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

const params: v2.CloudAuthenticationApiGetGitHubCloudAuthIntakeMappingRequest =
  {
    intakeMappingId: "intake_mapping_id",
  };

apiInstance
  .getGitHubCloudAuthIntakeMapping(params)
  .then((data: v2.GitHubCloudAuthIntakeMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
