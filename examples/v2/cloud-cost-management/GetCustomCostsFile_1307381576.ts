/**
 * Get Custom Costs File returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCustomCostsFileRequest = {
  fileId: "9d055d22-a838-4e9f-bc34-a4f9ab66280c",
};

apiInstance
  .getCustomCostsFile(params)
  .then((data: v2.CustomCostsFileGetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
