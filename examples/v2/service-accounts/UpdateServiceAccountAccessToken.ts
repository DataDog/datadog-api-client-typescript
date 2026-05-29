/**
 * Update an access token for a service account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

// there is a valid "service_account_user" in the system
const SERVICE_ACCOUNT_USER_DATA_ID = process.env
  .SERVICE_ACCOUNT_USER_DATA_ID as string;

// there is a valid "service_account_access_token" for "service_account_user"
const SERVICE_ACCOUNT_ACCESS_TOKEN_DATA_ID = process.env
  .SERVICE_ACCOUNT_ACCESS_TOKEN_DATA_ID as string;

const params: v2.ServiceAccountsApiUpdateServiceAccountAccessTokenRequest = {
  body: {
    data: {
      id: SERVICE_ACCOUNT_ACCESS_TOKEN_DATA_ID,
      type: "service_access_tokens",
      attributes: {
        name: "My Access Token-updated",
      },
    },
  },
  serviceAccountId: SERVICE_ACCOUNT_USER_DATA_ID,
  tokenId: SERVICE_ACCOUNT_ACCESS_TOKEN_DATA_ID,
};

apiInstance
  .updateServiceAccountAccessToken(params)
  .then((data: v2.ServiceAccessTokenResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
