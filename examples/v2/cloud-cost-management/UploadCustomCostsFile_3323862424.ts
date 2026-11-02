/**
 * Upload Custom Costs file marked as an AI provider file returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUploadCustomCostsFileRequest = {
  body: [
    {
      providerName: "my_ai_provider",
      chargePeriodStart: "2026-10-01",
      chargePeriodEnd: "2026-10-31",
      chargeDescription: "my_description",
      billedCost: 250,
      billingCurrency: "USD",
    },
  ],
  aiProvider: true,
};

apiInstance
  .uploadCustomCostsFile(params)
  .then((data: v2.CustomCostsFileUploadResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
