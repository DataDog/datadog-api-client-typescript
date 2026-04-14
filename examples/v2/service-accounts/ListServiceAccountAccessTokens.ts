/**
 * List access tokens for a service account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

// there is a valid "service_account_user" in the system
const SERVICE_ACCOUNT_USER_DATA_ID = process.env
  .SERVICE_ACCOUNT_USER_DATA_ID as string;

const params: v2.ServiceAccountsApiListServiceAccountAccessTokensRequest = {
  serviceAccountId: SERVICE_ACCOUNT_USER_DATA_ID,
};

apiInstance
  .listServiceAccountAccessTokens(params)
  .then((data: v2.ListPersonalAccessTokensResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
