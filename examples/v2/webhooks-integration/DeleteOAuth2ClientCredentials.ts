/**
 * Delete an OAuth2 client credentials auth method returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebhooksIntegrationApi(configuration);

const params: v2.WebhooksIntegrationApiDeleteOAuth2ClientCredentialsRequest = {
  authMethodId: "auth_method_id",
};

apiInstance
  .deleteOAuth2ClientCredentials(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
