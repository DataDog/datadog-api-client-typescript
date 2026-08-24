/**
 * Create or update a RUM retention quota config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRetentionQuotasApi(configuration);

const params: v2.RUMRetentionQuotasApiUpsertRumQuotaConfigRequest = {
  body: {
    data: {
      attributes: {
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
      type: "rum_quota_config",
    },
  },
  scopeType: "application",
  scopeId: "cd73a516-a481-4af5-8352-9b577465c77b",
};

apiInstance
  .upsertRumQuotaConfig(params)
  .then((data: v2.RumRetentionQuotaConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
