/**
 * Delete a usage quota returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteQuota"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiDeleteQuotaRequest = {
  quotaNamespace: "ai_credits",
  id: "MTIzNB9haV9jcmVkaXRzH3VzZXJfaGFuZGxlOl9fQUxMX18",
};

apiInstance
  .deleteQuota(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
