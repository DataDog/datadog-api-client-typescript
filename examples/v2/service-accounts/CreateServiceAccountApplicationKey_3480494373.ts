/**
 * Create an application key with scopes for this service account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

// there is a valid "service_account_user" in the system
const SERVICE_ACCOUNT_USER_DATA_ID = process.env
  .SERVICE_ACCOUNT_USER_DATA_ID as string;

const params: v2.ServiceAccountsApiCreateServiceAccountApplicationKeyRequest = {
  body: {
    data: {
      attributes: {
        name: "Example-Service-Account",
        scopes: [
          "dashboards_read",
          "dashboards_write",
          "dashboards_public_share",
        ],
      },
      type: "application_keys",
    },
  },
  serviceAccountId: SERVICE_ACCOUNT_USER_DATA_ID,
};

apiInstance
  .createServiceAccountApplicationKey(params)
  .then((data: v2.ApplicationKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
