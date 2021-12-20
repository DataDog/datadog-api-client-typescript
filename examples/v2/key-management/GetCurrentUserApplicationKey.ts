/**
 * Get one Application key owned by current user returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

// there is a valid "application_key" in the system
let APPLICATION_KEY_DATA_ID = process.env.APPLICATION_KEY_DATA_ID as string;

let params: v2.KeyManagementApiGetCurrentUserApplicationKeyRequest = {
  appKeyId: APPLICATION_KEY_DATA_ID,
};

apiInstance
  .getCurrentUserApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
