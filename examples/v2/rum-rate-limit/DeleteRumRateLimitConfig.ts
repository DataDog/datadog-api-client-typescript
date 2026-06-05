/**
 * Delete a RUM rate limit configuration returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteRumRateLimitConfig"] = true;
const apiInstance = new v2.RumRateLimitApi(configuration);

const params: v2.RumRateLimitApiDeleteRumRateLimitConfigRequest = {
  scopeType: "application",
  scopeId: "cd73a516-a481-4af5-8352-9b577465c77b",
};

apiInstance
  .deleteRumRateLimitConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
