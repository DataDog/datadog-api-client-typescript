/**
 * Get a RUM retention quota configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRetentionQuotaApi(configuration);

const params: v2.RUMRetentionQuotaApiGetRumQuotaConfigRequest = {
  scopeType: "application",
  scopeId: "ced16651-97b6-4e67-8590-8caec3af0695",
};

apiInstance
  .getRumQuotaConfig(params)
  .then((data: v2.RumRetentionQuotaConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
