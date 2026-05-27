/**
 * Register an OAuth2 client returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.registerOAuthClient"] = true;
const apiInstance = new v2.OAuth2ClientPublicApi(configuration);

const params: v2.OAuth2ClientPublicApiRegisterOAuthClientRequest = {
  body: {
    clientName: "Example MCP Client",
    clientUri: "https://example.com",
    grantTypes: ["authorization_code", "refresh_token"],
    jwksUri: "https://example.com/.well-known/jwks.json",
    logoUri: "https://example.com/logo.png",
    policyUri: "https://example.com/privacy",
    redirectUris: ["https://example.com/oauth/callback"],
    responseTypes: ["code"],
    scope: "openid profile",
    tokenEndpointAuthMethod: "none",
    tosUri: "https://example.com/tos",
  },
};

apiInstance
  .registerOAuthClient(params)
  .then((data: v2.OAuthClientRegistrationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
