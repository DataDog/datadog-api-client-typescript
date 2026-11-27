/**
 * Create or update a RUM retention quota config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMRetentionQuotasApi(configuration);

// there is a valid "rum_application" in the system
const RUM_APPLICATION_DATA_ID = process.env.RUM_APPLICATION_DATA_ID as string;

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
      id: RUM_APPLICATION_DATA_ID,
      type: "rum_quota_config",
    },
  },
  scopeType: "application",
  scopeId: RUM_APPLICATION_DATA_ID,
};

apiInstance
  .upsertRumQuotaConfig(params)
  .then((data: v2.RumRetentionQuotaConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
