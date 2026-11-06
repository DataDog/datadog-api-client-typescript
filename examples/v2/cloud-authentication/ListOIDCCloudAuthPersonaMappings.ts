/**
 * List all Custom OIDC persona mappings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listOIDCCloudAuthPersonaMappings"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

apiInstance
  .listOIDCCloudAuthPersonaMappings()
  .then((data: v2.OIDCCloudAuthPersonaMappingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
