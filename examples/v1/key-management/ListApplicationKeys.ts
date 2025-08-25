/**
 * Get all application keys returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

apiInstance
  .listApplicationKeys()
  .then((data: v1.ApplicationKeyListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
