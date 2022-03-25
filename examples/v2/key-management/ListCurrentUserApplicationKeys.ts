/**
 * Get all application keys owned by current user returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

apiInstance
  .listCurrentUserApplicationKeys()
  .then((data: v2.ListApplicationKeysResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
