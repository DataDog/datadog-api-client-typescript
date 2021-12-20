/**
 * Create an app key for this service account returns "Created" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

// there is a valid "service_account_user" in the system
let SERVICE_ACCOUNT_USER_DATA_ID = process.env
  .SERVICE_ACCOUNT_USER_DATA_ID as string;

let params: v2.ServiceAccountsApiCreateServiceAccountApplicationKeyRequest = {
  body: {
    data: {
      attributes: {
        name: "Example-Create_an_app_key_for_this_service_account_returns_Created_response",
      },
      type: "application_keys",
    },
  },
  serviceAccountId: SERVICE_ACCOUNT_USER_DATA_ID,
};

apiInstance
  .createServiceAccountApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
