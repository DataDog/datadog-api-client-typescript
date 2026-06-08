/**
 * Create or update a RUM rate limit configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateRumRateLimitConfig"] = true;
const apiInstance = new v2.RumRateLimitApi(configuration);

const params: v2.RumRateLimitApiUpdateRumRateLimitConfigRequest = {
  body: {
    data: {
      attributes: {
        adaptive: {
          maxRetentionRate: 0.5,
        },
        custom: {
          dailyResetTime: "08:00",
          dailyResetTimezone: "+09:00",
          quotaReachedAction: "stop",
          sessionLimit: 1000000,
          windowType: "daily",
        },
        mode: "custom",
      },
      id: "cd73a516-a481-4af5-8352-9b577465c77b",
      type: "rum_rate_limit_config",
    },
  },
  scopeType: "application",
  scopeId: "cd73a516-a481-4af5-8352-9b577465c77b",
};

apiInstance
  .updateRumRateLimitConfig(params)
  .then((data: v2.RumRateLimitConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
