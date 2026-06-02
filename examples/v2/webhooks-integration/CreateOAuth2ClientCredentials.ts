/**
 * Create an OAuth2 client credentials auth method returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebhooksIntegrationApi(configuration);

const params: v2.WebhooksIntegrationApiCreateOAuth2ClientCredentialsRequest = {
  body: {
    data: {
      attributes: {
        accessTokenUrl: "https://example.com/oauth/token",
        audience: "https://api.example.com",
        clientId: "my-client-id",
        clientSecret: "my-client-secret",
        name: "my-oauth2-auth",
        scope: "read:webhooks write:webhooks",
      },
      type: "webhooks-auth-method-oauth2-client-credentials",
    },
  },
};

apiInstance
  .createOAuth2ClientCredentials(params)
  .then((data: v2.WebhooksOAuth2ClientCredentialsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
