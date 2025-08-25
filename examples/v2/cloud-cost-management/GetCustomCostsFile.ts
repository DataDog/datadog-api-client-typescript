/**
 * Get Custom Costs file returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCustomCostsFileRequest = {
  fileId: "file_id",
};

apiInstance
  .getCustomCostsFile(params)
  .then((data: v2.CustomCostsFileGetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
