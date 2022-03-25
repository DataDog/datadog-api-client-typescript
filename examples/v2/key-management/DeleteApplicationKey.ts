/**
 * Delete an application key returns "No Content" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

const params: v2.KeyManagementApiDeleteApplicationKeyRequest = {
  appKeyId: "app_key_id",
};

apiInstance
  .deleteApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
