/**
 * Upload Custom Costs File returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUploadCustomCostsFileRequest = {
  body: [
    {
      providerName: "my_provider",
      chargePeriodStart: "2023-05-06",
      chargePeriodEnd: "2023-06-06",
      chargeDescription: "my_description",
      billedCost: 250,
      billingCurrency: "USD",
      tags: {
        key: "value",
      },
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
