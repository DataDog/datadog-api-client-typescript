/**
 * Upload Custom Costs file returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUploadCustomCostsFileRequest = {
  body: [
    {
      billedCost: 100.5,
      billingCurrency: "USD",
      chargeDescription: "Monthly usage charge for my service",
      chargePeriodEnd: "2023-02-28",
      chargePeriodStart: "2023-02-01",
    },
  ],
};

apiInstance
  .uploadCustomCostsFile(params)
  .then((data: v2.CustomCostsFileUploadResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
