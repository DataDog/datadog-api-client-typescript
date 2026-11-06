/**
 * Create a Custom OIDC provider returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createOIDCCloudAuthProvider"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

const params: v2.CloudAuthenticationApiCreateOIDCCloudAuthProviderRequest = {
  body: {
    data: {
      type: "custom_oidc_provider_config",
      attributes: {
        providerName: "oidc-de20b7e944abfac3",
        issuerUrl: "https://oidc-de20b7e944abfac3.example.com",
        discoveryType: "oidc_discovery",
        audiences: ["sdk-test"],
      },
    },
  },
};

apiInstance
  .createOIDCCloudAuthProvider(params)
  .then((data: v2.OIDCCloudAuthProviderResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
