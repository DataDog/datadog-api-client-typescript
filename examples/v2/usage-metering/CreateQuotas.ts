/**
 * Create or update usage quotas returns "OK. The response includes each item's result; see each item's `error` attribute
 * for any that failed to write." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createQuotas"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiCreateQuotasRequest = {
  body: {
    data: [
      {
        attributes: {
          enforced: true,
          scope: {
            user_handle: "jane@example.com",
          },
          usageLimit: 100000,
        },
        type: "quotas",
      },
    ],
  },
  quotaNamespace: "ai_credits",
};

apiInstance
  .createQuotas(params)
  .then((data: v2.UsageQuotasBulkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
