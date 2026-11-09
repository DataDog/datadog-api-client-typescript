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
configuration.unstableOperations["v2.createQuotas"] = true;
configuration.unstableOperations["v2.deleteQuota"] = true;
configuration.unstableOperations["v2.getQuota"] = true;
const apiInstance = new v2.UsageMeteringApi(configuration);

// there is a valid "quota" in the system
const QUOTA_DATA_0_ID = process.env.QUOTA_DATA_0_ID as string;

const params: v2.UsageMeteringApiGetQuotaRequest = {
  includeDescendants: false,
  quotaNamespace: "ai_credits",
  id: QUOTA_DATA_0_ID,
};

apiInstance
  .getQuota(params)
  .then((data: v2.UsageQuotaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
