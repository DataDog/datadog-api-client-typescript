/**
 * Edit an application key for this service account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

const params: v2.ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest = {
  body: {
    data: {
      attributes: {
        name: "Application Key for managing dashboards",
        scopes: [
          "dashboards_read",
          "dashboards_write",
          "dashboards_public_share",
        ],
      },
      id: "00112233-4455-6677-8899-aabbccddeeff",
      type: "application_keys",
    },
  },
  serviceAccountId: "00000000-0000-1234-0000-000000000000",
  appKeyId: "app_key_id",
};

apiInstance
  .updateServiceAccountApplicationKey(params)
  .then((data: v2.PartialApplicationKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
