/**
 * Get a security filter returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityPlatformApi(configuration);

const params: v2.SecurityPlatformApiGetSecurityFilterRequest = {
  securityFilterId: "security_filter_id",
};

apiInstance
  .getSecurityFilter(params)
  .then((data: v2.SecurityFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
