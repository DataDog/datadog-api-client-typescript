/**
 * Create or update a RUM retention quota config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRetentionQuotaApi(configuration);

const params: v2.RUMRetentionQuotaApiUpsertRumQuotaConfigRequest = {
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
      id: "ced16651-97b6-4e67-8590-8caec3af0695",
      type: "rum_quota_config",
    },
  },
  scopeType: "application",
  scopeId: "ced16651-97b6-4e67-8590-8caec3af0695",
};

apiInstance
  .upsertRumQuotaConfig(params)
  .then((data: v2.RumRetentionQuotaConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
