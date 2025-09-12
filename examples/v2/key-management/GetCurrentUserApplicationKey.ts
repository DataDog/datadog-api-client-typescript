/**
 * Get one application key owned by current user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

// there is a valid "application_key" in the system
const APPLICATION_KEY_DATA_ID = process.env.APPLICATION_KEY_DATA_ID as string;

const params: v2.KeyManagementApiGetCurrentUserApplicationKeyRequest = {
  appKeyId: APPLICATION_KEY_DATA_ID,
};

apiInstance
  .getCurrentUserApplicationKey(params)
  .then((data: v2.ApplicationKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
