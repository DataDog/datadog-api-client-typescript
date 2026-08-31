/**
 * List usage quotas returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listQuotas"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiListQuotasRequest = {
  quotaNamespace: "ai_credits",
};

apiInstance
  .listQuotas(params)
  .then((data: v2.UsageQuotasListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
