/**
 * Delete an application key for this service account returns "No Content" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

const params: v2.ServiceAccountsApiDeleteServiceAccountApplicationKeyRequest = {
  serviceAccountId: "00000000-0000-1234-0000-000000000000",
  appKeyId: "app_key_id",
};

apiInstance
  .deleteServiceAccountApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
