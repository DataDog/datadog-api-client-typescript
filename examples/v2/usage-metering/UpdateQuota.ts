/**
 * Update a usage quota returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateQuota"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiUpdateQuotaRequest = {
  body: {
    data: {
      attributes: {
        enforced: false,
        pendingUsageLimit: 50000,
        usageLimit: 120000,
      },
      id: "MTIzNB9haV9jcmVkaXRzH3VzZXJfaGFuZGxlOl9fQUxMX18",
      type: "quotas",
    },
  },
  quotaNamespace: "ai_credits",
  id: "MTIzNB9haV9jcmVkaXRzH3VzZXJfaGFuZGxlOl9fQUxMX18",
};

apiInstance
  .updateQuota(params)
  .then((data: v2.UsageQuotaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
