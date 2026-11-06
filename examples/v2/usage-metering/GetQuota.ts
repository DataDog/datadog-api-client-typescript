/**
 * Get a usage quota returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getQuota"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetQuotaRequest = {
  quotaNamespace: "ai_credits",
  id: "MTIzNB9haV9jcmVkaXRzH3VzZXJfaGFuZGxlOl9fQUxMX18",
};

apiInstance
  .getQuota(params)
  .then((data: v2.UsageQuotaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
