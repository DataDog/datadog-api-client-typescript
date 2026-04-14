/**
 * Revoke an access token for a service account returns "No Content" response
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

const params: v2.ServiceAccountsApiRevokeServiceAccountAccessTokenRequest = {
  serviceAccountId: SERVICE_ACCOUNT_USER_DATA_ID,
  patUuid: SERVICE_ACCOUNT_ACCESS_TOKEN_DATA_ID,
};

apiInstance
  .revokeServiceAccountAccessToken(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
