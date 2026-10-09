/**
 * Cancel a scheduled usage quota limit returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deletePendingQuota"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiDeletePendingQuotaRequest = {
  quotaNamespace: "ai_credits",
  id: "MTIzNB9haV9jcmVkaXRzH3VzZXJfaGFuZGxlOl9fQUxMX18",
};

apiInstance
  .deletePendingQuota(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
