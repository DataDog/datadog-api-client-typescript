/**
 * Get a Custom OIDC provider returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getOIDCCloudAuthProvider"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

// there is a valid "oidc_cloud_auth_provider" in the system
const OIDC_CLOUD_AUTH_PROVIDER_DATA_ID = process.env
  .OIDC_CLOUD_AUTH_PROVIDER_DATA_ID as string;

const params: v2.CloudAuthenticationApiGetOIDCCloudAuthProviderRequest = {
  providerId: OIDC_CLOUD_AUTH_PROVIDER_DATA_ID,
};

apiInstance
  .getOIDCCloudAuthProvider(params)
  .then((data: v2.OIDCCloudAuthProviderResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
