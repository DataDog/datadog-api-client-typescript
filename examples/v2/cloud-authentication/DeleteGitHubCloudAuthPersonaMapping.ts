/**
 * Delete a GitHub cloud auth persona mapping returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteGitHubCloudAuthPersonaMapping"] =
  true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

const params: v2.CloudAuthenticationApiDeleteGitHubCloudAuthPersonaMappingRequest =
  {
    personaMappingId: "persona_mapping_id",
  };

apiInstance
  .deleteGitHubCloudAuthPersonaMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
