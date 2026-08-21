/**
 * Get a RUM retention quota configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRetentionQuotasApi(configuration);

const params: v2.RUMRetentionQuotasApiGetRumQuotaConfigRequest = {
  scopeType: "application",
  scopeId: "cd73a516-a481-4af5-8352-9b577465c77b",
};

apiInstance
  .getRumQuotaConfig(params)
  .then((data: v2.RumRetentionQuotaConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
