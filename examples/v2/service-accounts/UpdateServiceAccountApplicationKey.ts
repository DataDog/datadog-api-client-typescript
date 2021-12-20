/**
 * Edit an app key owned by this service account returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

// there is a valid "service_account_user" in the system
let SERVICE_ACCOUNT_USER_DATA_ID = process.env
  .SERVICE_ACCOUNT_USER_DATA_ID as string;

// there is a valid "service_account_application_key" for "service_account_user"
let SERVICE_ACCOUNT_APPLICATION_KEY_DATA_ID = process.env
  .SERVICE_ACCOUNT_APPLICATION_KEY_DATA_ID as string;

let params: v2.ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest = {
  body: {
    data: {
      id: SERVICE_ACCOUNT_APPLICATION_KEY_DATA_ID,
      type: "application_keys",
      attributes: {
        name: "Application Key for submitting metrics-updated",
      },
    },
  },
  serviceAccountId: SERVICE_ACCOUNT_USER_DATA_ID,
  appKeyId: SERVICE_ACCOUNT_APPLICATION_KEY_DATA_ID,
};

apiInstance
  .updateServiceAccountApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
