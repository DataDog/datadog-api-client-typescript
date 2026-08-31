/**
 * Delete a usage quota returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteQuota"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiDeleteQuotaRequest = {
  quotaNamespace: "ai_credits",
  id: "MjAfYWlfY3JlZGl0c1911c2VyX2hhbmRsZTpfX0FMTF9f",
};

apiInstance
  .deleteQuota(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
