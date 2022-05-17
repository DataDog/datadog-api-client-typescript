/**
 * Get one application key for this service account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

const params: v2.ServiceAccountsApiGetServiceAccountApplicationKeyRequest = {
  serviceAccountId: "00000000-0000-1234-0000-000000000000",
  appKeyId: "app_key_id",
};

apiInstance
  .getServiceAccountApplicationKey(params)
  .then((data: v2.PartialApplicationKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
