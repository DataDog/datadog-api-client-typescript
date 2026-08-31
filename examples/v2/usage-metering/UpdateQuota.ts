/**
 * Update a usage quota returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateQuota"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiUpdateQuotaRequest = {
  body: {
    data: {
      attributes: {
        enforced: false,
        usageLimit: 120000,
      },
      id: "MjAfYWlfY3JlZGl0c1911c2VyX2hhbmRsZTpfX0FMTF9f",
      type: "quotas",
    },
  },
  quotaNamespace: "ai_credits",
  id: "MjAfYWlfY3JlZGl0c1911c2VyX2hhbmRsZTpfX0FMTF9f",
};

apiInstance
  .updateQuota(params)
  .then((data: v2.UsageQuotaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
