/**
 * Update Custom Costs file returns "OK" response
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

// there is a valid "custom_costs_file" in the system
const CUSTOM_COSTS_FILE_DATA_ID = process.env
  .CUSTOM_COSTS_FILE_DATA_ID as string;

const params: v2.CloudCostManagementApiUpdateCustomCostsFileRequest = {
  body: {
    data: {
      attributes: {
        aiProvider: true,
      },
      id: CUSTOM_COSTS_FILE_DATA_ID,
      type: "cost_metadata",
    },
  },
  fileId: CUSTOM_COSTS_FILE_DATA_ID,
};

apiInstance
  .updateCustomCostsFile(params)
  .then((data: v2.CustomCostsFileUploadResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
