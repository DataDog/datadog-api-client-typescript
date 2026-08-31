/**
 * List usage quotas returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listQuotas"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiListQuotasRequest = {
  quotaNamespace: "ai_credits",
};

(async () => {
  try {
    for await (const item of apiInstance.listQuotasWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
