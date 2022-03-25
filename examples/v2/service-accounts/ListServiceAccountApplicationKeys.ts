/**
 * List application keys for this service account returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

const params: v2.ServiceAccountsApiListServiceAccountApplicationKeysRequest = {
  serviceAccountId: "00000000-0000-1234-0000-000000000000",
};

apiInstance
  .listServiceAccountApplicationKeys(params)
  .then((data: v2.ListApplicationKeysResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
